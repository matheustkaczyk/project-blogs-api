module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
{},
{ timestamps: false });

  PostCategory.associate = (models) => {
    PostCategory.belongsToMany(models.Category, {
      foreignKey: 'id',
      through: PostCategory,
      otherKey: 'categoryId',
    });
    PostCategory.belongsToMany(models.BlogPost, {
      foreignKey: 'id',
      through: PostCategory,
      otherKey: 'postId',
    });
  };

  return PostCategory;
};
