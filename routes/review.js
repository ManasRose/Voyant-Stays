const express = require('express');
const router=express.Router( {mergeParams:true});
const wrapAsync=require('../utils/wrapAsync')
const {isLoggedIn,isReviewAuthor}=require("../middleware");

const reviewController=require("../controllers/reviews");

//Create Review
router.post("/", isLoggedIn, wrapAsync(reviewController.createReviews));

//Delete Review
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync (reviewController.destroyReviews))

module.exports = router;