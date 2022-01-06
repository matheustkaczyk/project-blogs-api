module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
{
  postId: { type: DataTypes.INTEGER, foreignKey: true },
  categoryId: { type: DataTypes.INTEGER, foreignKey: true },
},
{
  tableName: 'PostsCategories',
  timestamps: false,
});

  // PostCategory.associate = (models) => {
  //   PostCategory.belongsToMany(models.Category, { foreignKey: 'id', as: 'posts' });
  //   PostCategory.belongsTo(models.BlogPost, { foreignKey: 'id', as: 'posts' });
  // };

  return PostCategory;
};