const express = require('express');

const router = express.Router();

const { User } = require('../models/user');
const userSchema = require('../validations/userPostValidation');

router.post('/user', (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const validation = userSchema.validate({ displayName, email, password, image });

    if (validation.error) return res.status(400).json(validation.error);

    const userExists = User.findOne({ where: { email } });

    if (userExists) return res.status(400).json({ message: 'User already registered' });

    const newUser = User.create({ displayName, email, password, image });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error.message);
    return res.status(500).end();
  }
});

module.exports = router;