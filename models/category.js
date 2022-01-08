module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', 
{
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: DataTypes.STRING,
},
{
  tableName: 'Categories',
  timestamps: false,
});

  // Category.associate = (models) => {
  //   Category.belongsToMany(models.BlogPosts, {
  //     foreignKey: 'categoryId',
  //     through: 'postsCategories',
  //     as: 'categories',
  //   });
  // };
  
  return Category;
};
