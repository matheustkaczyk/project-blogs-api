const Joi = require('joi');

const blogPostValidation = Joi.object({
  title: Joi.string()
    .required(),
  content: Joi.string()
    .required(),
  categoryIds: Joi.array().items(Joi.number())
    .required(),
});

module.exports = blogPostValidation;
