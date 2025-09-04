const Joi = require('joi');
const reviewSchema= Joi.object({
    review: Joi.object(
        {
        comment: Joi.string().required(),
        rating: Joi.required()
        }
    ).required()
})
module.exports = reviewSchema;
