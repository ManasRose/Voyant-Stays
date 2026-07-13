const Listing = require("../models/listing");
const ExpressErrors = require("../utils/ExpressErrors");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });
const { TAGS } = require("../utils/tags");
const { cached } = require("../utils/cache");

const DEFAULT_PAGE_SIZE = 12;
const GEOCODE_CACHE_TTL = 60 * 60 * 24 * 30; // 30 days — addresses essentially never move

module.exports.index = async (req, res) => {
  const { country } = req.query;
  const page = Math.max(parseInt(req.query.page) || 1, 1);
  const limit = DEFAULT_PAGE_SIZE;
  const skip = (page - 1) * limit;

  let filter = {};
  if (country) {
    filter.country = { $regex: country, $options: "i" };
  }

  const listings = await Listing.find(filter)
    .populate("reviews")
    .skip(skip)
    .limit(limit)
    .lean();

  const avgRatings = listings.map((listing) => {
    if (!listing.reviews || listing.reviews.length === 0) return null;
    const sum = listing.reviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / listing.reviews.length).toFixed(1);
  });

  res.render("listings/index", {
    listings,
    avgRatings,
    searchQuery: country || "",
    currentPage: page,
  });
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  let listingShow = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listingShow) {
    req.flash("error", "Listing does not exist");
    res.redirect("/listings");
  } else {
    res.render("listings/showListing", { listingShow });
  }
};

module.exports.renderNewForm = (req, res) => {
  const availableTags = Listing.schema.path("tags").enumValues;
  res.render("listings/new", { tags: TAGS });
};

module.exports.createListing = async (req, res) => {
  if (!req.body) {
    throw new ExpressErrors(400, "Send Valid Data");
  }

  // --- GEOCODING CACHE (kept) ---
  // Mapbox geocoding for the same location string was being re-requested
  // every time a listing was created there. Addresses don't move, so this
  // is cached for 30 days, keyed by the normalized location text. This is
  // off the hot read path, so it doesn't add load under GET traffic.
  const locationKey = `geocode:${req.body.location.trim().toLowerCase()}`;
  const geometry = await cached(locationKey, GEOCODE_CACHE_TTL, async () => {
    const response = await geocodingClient
      .forwardGeocode({ query: req.body.location, limit: 1 })
      .send();
    return response.body.features[0].geometry;
  });

  let url = req.file.path;
  let filename = req.file.filename;

  const listing = new Listing(req.body);
  listing.owner = req.user._id;
  listing.image = { url, filename };
  listing.geometry = geometry;
  await listing.save();

  req.flash("success", "New Listing Created");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  let listings = await Listing.findById(id);
  if (!listings) {
    req.flash("error", "Listing does not exist");
    res.redirect("/listings");
  } else {
    res.render("listings/edit", { listings, tags: TAGS });
  }
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing does not exists");
  }
  Object.assign(listing, req.body);
  listing.tags = req.body.tags || [];

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
  }
  await listing.save();

  req.flash("success", "Listing Updated Successfully");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted");
  res.redirect("/listings");
};

module.exports.filterByTag = async (req, res) => {
  let { tag } = req.params;
  const page = Math.max(parseInt(req.query.page) || 1, 1);
  const limit = DEFAULT_PAGE_SIZE;
  const skip = (page - 1) * limit;

  const filter = { tags: tag };

  const listings = await Listing.find(filter)
    .populate("reviews")
    .skip(skip)
    .limit(limit)
    .lean();

  const avgRatings = listings.map((listing) => {
    if (!listing.reviews || listing.reviews.length === 0) return null;
    const sum = listing.reviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / listing.reviews.length).toFixed(1);
  });

  res.render("listings/index", {
    listings,
    avgRatings,
    title: `${tag}`,
    currentPage: page,
  });
};
