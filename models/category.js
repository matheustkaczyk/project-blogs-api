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
  //   Category.hasMany(models.PostCategory, {
  //     foreignKey: 'categoryId',
  //     through: 'category'
  //   });
  // };
  
  return Category;
};
