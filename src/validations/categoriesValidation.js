const Joi = require('joi');

const categoriesValidation = Joi.object({
  name: Joi.string()
    .required()
    .messages({ 'string.required': '"name" is required' }),
});

module.exports = categoriesValidation;
