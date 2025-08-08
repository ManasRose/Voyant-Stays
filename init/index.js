// Check for dotenv and load environment variables
const path = require("path");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
}

const mongoose = require("mongoose");
const { data } = require("./data.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js"); // Import Review model
const User = require("../models/user.js"); // Import User model
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

const dbUrl=process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

// NEW DATA: Locations to be randomly assigned
const newLocations = [
  { city: "Paris", country: "France" },
  { city: "Madrid", country: "Spain" },
  { city: "New York", country: "USA" },
  { city: "Beijing", country: "China" },
  { city: "Rome", country: "Italy" },
  { city: "Istanbul", country: "Turkey" },
  { city: "Mexico City", country: "Mexico" },
  { city: "Bangkok", country: "Thailand" },
  { city: "Berlin", country: "Germany" },
  { city: "London", country: "UK" },
  { city: "Tokyo", country: "Japan" },
  { city: "Athens", country: "Greece" },
];

// NEW DATA: Sample reviews
const sampleReviews = [
  "Absolutely breathtaking views and incredible service. A truly 5-star experience!",
  "The property was clean, modern, and had everything we needed. Highly recommend.",
  "A perfect getaway. The location was ideal and the host was very accommodating.",
  "We had a wonderful time. The place exceeded our expectations in every way.",
  "Good value for the price. The location is convenient and the amenities are great.",
  "A truly memorable stay. We can't wait to come back next year!",
];

const allTags = [
  "trending", "rooms", "iconicCities", "mountains", "amazingPools",
  "camping", "farm", "arctic", "summer", "nature", "cruise",
  "sailBoat", "adventure",
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomTags() {
  const shuffled = [...allTags].sort(() => 0.5 - Math.random());
  const count = Math.floor(Math.random() * 3) + 3;
  return shuffled.slice(0, count);
}

const initDB = async () => {
  // Clear all existing data
  await Listing.deleteMany({});
  await Review.deleteMany({});
  console.log("Cleared existing listings and reviews.");

  // Find the user who will author all reviews
  const demoUser = await User.findOne({ username: "demo" });
  if (!demoUser) {
    console.log("Demo user not found. Creating a new one...");
    const newUser = new User({
        email: "demo@gmail.com",
        username: "demo",
    });
    demoUser = await User.register(newUser, "demo@123");
  }
  // Loop through each listing in the source data
  for (const listingData of data) {
    // 1. Create a new Listing
    const newListing = new Listing(listingData);
    
    // 2. Assign random location and geocode it
    const randomLocation = getRandomItem(newLocations);
    newListing.location = randomLocation.city;
    newListing.country = randomLocation.country;
    
    const response = await geocodingClient
      .forwardGeocode({
        query: `${newListing.location}, ${newListing.country}`,
        limit: 1,
      })
      .send();
    
    if (response && response.body.features.length > 0) {
      newListing.geometry = response.body.features[0].geometry;
    } else {
      console.warn(`Could not geocode: ${newListing.location}, ${newListing.country}. Skipping this listing.`);
      continue; // Skip this listing if geocoding fails
    }

    // 3. Assign random tags and the owner
    newListing.tags = getRandomTags();
    newListing.owner = demoUser._id;
    newListing.reviews = [];

    // 4. Create and add 3-4 reviews
    const numReviews = Math.floor(Math.random() * 2) + 3; // 3 or 4 reviews
    for (let i = 0; i < numReviews; i++) {
      const newReview = new Review({
        comment: getRandomItem(sampleReviews),
        rating: Math.floor(Math.random() * 2) + 4, // Rating of 4 or 5
        author: demoUser._id,
      });
      await newReview.save();
      newListing.reviews.push(newReview);
    }

    // 5. Save the complete listing with its reviews
    await newListing.save();
  }

  console.log("Data was initialized successfully!");
};

initDB().then(() => {
  console.log("Database initialization complete. Closing connection.");
  mongoose.connection.close();
});