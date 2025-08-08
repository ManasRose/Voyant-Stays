const Listing = require("../models/listing");
const ExpressErrors=require("../utils/ExpressErrors");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken=process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });
const { TAGS } = require('../utils/tags');

module.exports.index = async (req, res) => {
    const {country}= req.query;
    let filter={};

    if (country) {
        filter.country = { $regex: country, $options: 'i' };
    }
    const listings = await Listing.find(filter);
    res.render('listings/index', { listings, searchQuery: country || "" });
}
module.exports.showListing=async (req,res) =>{
    let {id}=req.params;                                        //Nested Populate
    let listingShow= await Listing.findById(id).populate({path:"reviews",populate:{path:"author",},}).populate("owner");
    if(!listingShow) {
        req.flash('error', 'Listing does not exist');
        res.redirect('/listings');
    }else{
        res.render('listings/showListing', {listingShow});
    }
}

module.exports.renderNewForm=(req,res)=>{
    const availableTags = Listing.schema.path('tags').enumValues;
    console.log("--- Inside renderNewForm Controller ---");
    console.log("Data being sent to template:", availableTags);
    res.render("listings/new", {tags:TAGS});
}

module.exports.createListing=async (req,res)=>{
    
    let response = await geocodingClient.forwardGeocode({
        query: req.body.location,
        limit: 1,
    }).send();
        

    if(!req.body){
        throw new ExpressErrors(400,"Send Valid Data");
    }
    let url=req.file.path;
    let filename=req.file.filename;

    const listing = new Listing(req.body);
    listing.owner=req.user._id; //req.user is a passport method hoti hai, used to store the user info
    listing.image={url,filename}; //have to do this alag se as the image feild in new form is not json format
    listing.geometry=response.body.features[0].geometry
    let saved = await listing.save();
    console.log(saved);
    req.flash('success', 'New Listing Created');
    res.redirect('/listings');
}

module.exports.renderEditForm=async (req,res)=>{
    let {id}=req.params;
    let listings=await Listing.findById(id);
    if(!listings) {
        req.flash('error', 'Listing does not exist');
        res.redirect('/listings');
    }else{
        res.render('listings/edit', {listings,tags: TAGS });
    }
}

module.exports.updateListing=async (req,res)=>{
    let{id}=req.params;
    let listing = await Listing.findById(id);
    if(!listing){
        req.flash('error','Listing does not exists')
    }
    Object.assign(listing, req.body);
    listing.tags = req.body.tags || [];

    if(typeof req.file!=='undefined'){
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image={url,filename};
    }
    await listing.save();
    req.flash('success', 'Listing Updated Successfully');
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing=async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    req.flash('success', 'Listing Deleted');
    res.redirect("/listings");
}

module.exports.filterByTag=async(req,res)=>{
    let{tag}=req.params;
    const listings = await Listing.find({tags:tag});
    res.render("listings/index", { listings: listings, title: `${tag}` });
}