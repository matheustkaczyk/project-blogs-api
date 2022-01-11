const express = require('express');

const { BlogPost, Category, User } = require('../models');

const blogPostValidation = require('../validations/blogPostValidation');
const jwtValidation = require('../middlewares/jwtValidation');

const router = express.Router();

router.post('/post', jwtValidation, async (req, res) => {
  const { title, content, categoryIds, userId } = req.body;

  const bodyVal = blogPostValidation.validate({ title, content, categoryIds });

  if (bodyVal.error) return res.status(400).json({ message: bodyVal.error.details[0].message });

  const findCategory = await Category.findAll({ where: { id: categoryIds } });

  if (findCategory.length <= 0) return res.status(400).json({ message: '"categoryIds" not found' });

  const categories = await BlogPost.create({ title, content, categoryIds, userId });

  // const postCategoryCreate = await PostCategory.bulkCreate(categoryIds);

  return res.status(201).json(categories);
});

router.get('/post', jwtValidation, async (req, res) => {
  try {
    const getAll = await BlogPost.findAll(
      { 
        include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
        ],
      },
    );
  
    return res.status(200).json(getAll);
  } catch (error) {
    console.error(error.message);
    res.status(500).end();
  }
});

// router.get('/post/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const getAll = await BlogPost.findAll(
//       { 
//         include: [
//         { model: User, as: 'user', attributes: { exclude: ['password'] } },
//         { model: Category, as: 'categories', through: { attributes: [] } },
//         ],
//       },
//     );
  
//     return res.status(200).json(getAll);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).end();
//   }
// });

module.exports = router;