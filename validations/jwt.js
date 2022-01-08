const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
  expiresIn: 900,
};

const token = (newUser) => jwt.sign(newUser, process.env.JWT_SECRET, jwtConfig);

const tokenValidation = (tokenValue) => {
  try {
    const validation = jwt.verify(tokenValue, process.env.JWT_SECRET);
    return validation;
  } catch (error) {
    return error;
  }
};

module.exports = { token, tokenValidation };
