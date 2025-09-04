const express = require('express');
const router=express.Router();
const wrapAsync=require('../utils/wrapAsync')
const ExpressErrors = require("../utils/ExpressErrors");
const listingSchema = require('../utils/listingSchemaValidate');
const {isLoggedIn,isOwner}=require("../middleware");
const listingController=require("../controllers/listings");
const multer=require("multer");//allows u to use multipart form data for uploading file
const {storage}=require("../cloudConfig");
const upload=multer({storage})


const validateListing = (req, res, next) => {
    let error  = listingSchema.validate(req.body).error;
    if (error) {
        console.log(error);
        throw new ExpressErrors(400, error.details[0].message);
    }else{
        next();
    }
};

//Show All Listings
router.get('/', wrapAsync(listingController.index));

//Show using filters
router.get('/tags/:tag',wrapAsync(listingController.filterByTag));

//New Listing Form
router.get("/new" , isLoggedIn, listingController.renderNewForm);

//Show One Listing
router.get("/:id" , wrapAsync(listingController.showListing));

//Create Route
router.post("/" ,isLoggedIn, validateListing,upload.single("image"), wrapAsync(listingController.createListing));

//Update Listing Form
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));

//Update Route
router.put("/:id",isLoggedIn,isOwner ,validateListing,upload.single("image"), wrapAsync(listingController.updateListing));

//Delete Route
router.delete("/:id",isLoggedIn,isOwner ,wrapAsync(listingController.destroyListing));

module.exports = router;