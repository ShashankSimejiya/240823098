const Joi = require('joi');

exports.createValidator = Joi.object({
    title : Joi.string().min(3).max(30).required(),
    artist : Joi.string().min(3).max(50).required(),
    category : Joi.string().min(3).max(50).required(),
    album : Joi.string().min(3).max(50).required(),
    url : Joi.string().uri().required(),
    photo : Joi.string().uri().required(),
    year : Joi.number().min(1900).max(new Date().getFullYear()).required(),
});

exports.updateValidator = Joi.object({
    title : Joi.string().min(3).max(30).required(),
    artist : Joi.string().min(3).max(50).required(),
    category : Joi.string().min(3).max(50).required(),
    album : Joi.string().min(3).max(50).required(),
    url : Joi.string().uri().required(),
    photo : Joi.string().uri().required(),
    year : Joi.number().min(1900).max(new Date().getFullYear()).required(),
});

exports.validate = (schema, data) => {
    const {error, value} = schema.validate(data, {abortEarly : false});
    if(error) {
        return {
            success : false,
            errors : error.details.map((error) => ({
                field : error.path[0],
                message : error.message,
            })),
        };
    }
    return {success : true, value};
};