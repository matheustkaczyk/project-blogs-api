module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
{
  postId: { type: DataTypes.INTEGER, foreignKey: true },
  categoryId: { 
    type: DataTypes.INTEGER,
    foreignKey: true,
    references: { model: 'Category', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
},
{ tableName: 'PostsCategories', timestamps: false });

  PostCategory.associate = (models) => {
    PostCategory.belongsToMany(models.Category, { foreignKey: 'id', through: 'posts' });
    PostCategory.belongsTo(models.BlogPost, { foreignKey: 'id', as: 'posts' });
  };

  return PostCategory;
};
