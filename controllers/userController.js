const express = require('express');

const router = express.Router();

const { User } = require('../models');
const userCreateSchema = require('../validations/userPostValidation');
const userLoginSchema = require('../validations/userLoginValidation');

const { token, tokenValidation } = require('../validations/jwt');

router.post('/user', async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const validation = userCreateSchema.validate({ displayName, email, password, image });

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

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const validation = userLoginSchema.validate({ email, password });

    if (validation.error) res.status(400).json({ message: validation.error.details[0].message });

    const userExists = await User.findAll({ where: { email } });

    if (userExists.length <= 0) res.status(400).json({ message: 'Invalid fields' });

    const user = { ...userExists[0].dataValues };

    const tokenJwt = token(user);

    return res.status(200).json({ token: tokenJwt });
  } catch (error) {
    console.error(error.message);
    return res.status(500).end();
  }
});

router.get('/user', async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) res.status(401).json({ message: 'Token not found' });
    
    const validation = await tokenValidation(authorization);

    if (validation.message) res.status(401).json({ message: 'Expired or invalid token' });

    const users = await User.findAll();

    if (users.length <= 0) res.status(400).json({ message: 'No user found' });

    return res.status(200).json(users);
  } catch (error) {
    console.error(error.message);
    return res.status(500).end();
  }
});

router.get('/user/:id', async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { id } = req.params;

    if (!authorization) res.status(401).json({ message: 'Token not found' });
    
    const validation = await tokenValidation(authorization);

    if (validation.message) res.status(401).json({ message: 'Expired or invalid token' });

    const user = await User.findOne({ where: { id } });

    if (!user) return res.status(404).json({ message: 'User does not exist' });

    return res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    return res.status(500).end();
  }
});

module.exports = router;