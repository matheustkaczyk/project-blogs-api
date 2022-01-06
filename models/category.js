module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', 
{
  id: DataTypes.INTEGER,
  name: DataTypes.STRING,
},
{
  tableName: 'Categories',
});

  Category.associate = (models) => {
    Category.hasMany(models.PostCategory, {
      foreignKey: 'categoryId',
      as: 'category',
    });
  };
  
  return Category;
};
