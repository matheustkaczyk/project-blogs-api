module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostsCategory', 
{},
{ timestamps: false });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'categoryId',
      through: PostCategory,
      otherKey: 'postId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'postId',
      through: PostCategory,
      otherKey: 'categoryId',
    });
  };

  return PostCategory;
};
