const express = require('express');

const { tokenValidation } = require('../validations/jwt');

const blogPostValidation = require('../validations/blogPostValidation');

const { BlogPost, Category, User } = require('../models');

const router = express.Router();

router.post('/post', async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;

  const bodyVal = blogPostValidation.validate({ title, content, categoryIds });

  if (bodyVal.error) return res.status(400).json({ message: bodyVal.error.details[0].message });

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const val = tokenValidation(authorization);

  if (val.message) return res.status(401).json({ message: 'Expired or invalid token' });

  const findCategory = await Category.findAll({ where: { id: categoryIds } });

  if (findCategory.length <= 0) return res.status(400).json({ message: '"categoryIds" not found' });

  const categories = await BlogPost.create({ title, content, categoryIds, userId: val.id });

  // const postCategoryCreate = await PostCategory.bulkCreate(categoryIds);

  return res.status(201).json(categories);
});

router.get('/post', async (req, res) => {
  try {
    const { authorization } = req.headers;
  
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
  
    const val = tokenValidation(authorization);
  
    if (val.message) return res.status(401).json({ message: 'Expired or invalid token' });
  
    const getAll = await BlogPost.findAll(
      { 
        include: [{ model: User, as: 'user' },
        { model: Category, as: 'categories', through: { attributes: [] } }],
      },
    );
  
    return res.status(200).json(getAll);
  } catch (error) {
    console.error(error.message);
    res.status(500).end();
  }
});

module.exports = router;