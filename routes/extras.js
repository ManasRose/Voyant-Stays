const express=require("express");
const router=express.Router();
const extrasController=require('../controllers/extras');

router.get("/privacy",extrasController.privacy);
router.get("/terms&conditions",extrasController.terms);

module.exports=router;