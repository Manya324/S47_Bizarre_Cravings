const Joi = require("joi");

const validator = (schema) => (payload) => schema.validate(payload, {abortEarly: false});

const createSchema = Joi.object({
    serial : Joi.number().required(),
    item : Joi.string().required(),
    person : Joi.string().required(),
    country : Joi.string(),
    description : Joi.string().required(),
    imageUrl : Joi.string().uri(),
})

exports.validateCreate = validator(createSchema)