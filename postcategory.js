// module.exports = (sequelize, DataTypes) => {
//   const PostCategory = sequelize.define('PostCategory', 
// {
//   postId: { 
//     type: DataTypes.INTEGER,
//     references: { model: 'BlogPost', id: 'id' },
//     onUpdate: 'CASCADE',
//     onDelete: 'CASCADE',
//   },
//   categoryId: { 
//     type: DataTypes.INTEGER,
//     references: { model: 'Category', key: 'id' },
//     onUpdate: 'CASCADE',
//     onDelete: 'CASCADE',
//   },
// },
// { tableName: 'PostsCategories', timestamps: false });

//   // PostCategory.associate = (models) => {
//   //   PostCategory.belongsToMany(models.Category, { foreignKey: 'id', through: 'categories' });
//   //   PostCategory.belongsToMany(models.BlogPost, { foreignKey: 'id', through: 'posts' });
//   // };

//   return PostCategory;
// };
