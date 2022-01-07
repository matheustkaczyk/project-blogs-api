const express = require('express');

const router = express.Router();

const { Category } = require('../models');

const { tokenValidation } = require('../validations/jwt');

const categoriesValidation = require('../validations/categoriesValidation');

router.post('/categories', async (req, res) => {
  try {
    const { name } = req.body;
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const tokenVal = tokenValidation(authorization);

    if (tokenVal.message) return res.status(401).json({ message: 'Expired or invalid token' });

    const val = categoriesValidation.validate({ name });

    if (val.error) { res.status(400).json({ message: val.error.details[0].message }); }

    await Category.create({ name });

    const newCategory = await Category.findOne({ where: { name } });

    return res.status(201).json(newCategory);
  } catch (error) {
    console.error(error.message);
    res.status(500).end();
  }
});

module.exports = router;