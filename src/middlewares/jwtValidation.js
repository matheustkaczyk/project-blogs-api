const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const validation = jwt.verify(authorization, process.env.JWT_SECRET);

    if (validation.message) return res.status(401).json({ message: 'Expired or invalid token' });

    if (validation.id) req.body.userId = validation.id;
  
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};