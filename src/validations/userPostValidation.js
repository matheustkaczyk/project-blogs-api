const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string()
    .min(8),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .required()
    .messages({ 'string.min': '"password" length must be 6 characters long' }),
  image: Joi.string(),
});

module.exports = userSchema;
