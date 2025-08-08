const Joi = require('joi');

const listingSchema = Joi.object({
    title: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    image: Joi.string().trim(),
    price: Joi.number().required().greater(0),
    location: Joi.string().required().trim(),
    country: Joi.string().required().trim()
});


module.exports = listingSchema;