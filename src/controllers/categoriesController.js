const express = require('express');

const router = express.Router();

const { Category } = require('../models');

const jwtValidation = require('../middlewares/jwtValidation');

const categoriesValidation = require('../validations/categoriesValidation');

router.post('/categories', jwtValidation, async (req, res) => {
  try {
    const { name } = req.body;

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

router.get('/categories', jwtValidation, async (req, res) => {
  const categories = await Category.findAll();

  return res.status(200).json(categories);
});

module.exports = router;