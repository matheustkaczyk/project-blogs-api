module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
{
  postId: DataTypes.INTEGER,
  categoryId: DataTypes.INTEGER,
},
{
  timestamps: false,
  tableName: 'PostsCategories',
});
  PostCategory.associate = (models) => {
    PostCategory.belongsTo(models.Category, {
      foreignKey: 'id',
      as: 'posts',
    });
  };

  return PostCategory;
};
