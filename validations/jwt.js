const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: 300,
};

const token = (newUser) => jwt.sign(newUser, process.env.JWT_SECRET, jwtConfig);

module.exports = token;
