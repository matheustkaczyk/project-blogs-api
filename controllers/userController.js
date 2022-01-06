const express = require('express');

const router = express.Router();

const { User } = require('../models');
const userSchema = require('../validations/userPostValidation');

const token = require('../validations/jwt');

router.post('/', async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const validation = userSchema.validate({ displayName, email, password, image });

    if (validation.error) res.status(400).json({ message: validation.error.details[0].message });

    const userExists = await User.findAll({ where: { email } });

    if (userExists.length > 0) return res.status(409).json({ message: 'User already registered' });

    const newUser = { displayName, email, password, image };

    await User.create(newUser);

    const tokenJwt = token(newUser);

    res.status(201).json({ token: tokenJwt });
  } catch (error) {
    console.error(error.message);
    return res.status(500).end();
  }
});

module.exports = router;