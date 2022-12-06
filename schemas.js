const Joi = require('joi');

module.exports.campgroundSchema = Joi.object({ // this is not a mongoDB schema. 
    campground: Joi.object({ // camground must be an object, andmust requrie. if we will look at or form, under "property" everything looks like camgrounf[somthing]. for example in new.ejs file.
        title: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().required(),
        location: Joi.string().required(),
        description: Joi.string().required()
    }).required()
});