const User = (sequelize, DataTypes) => sequelize.define('User', 
{
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
},
{
    timestamps: false,
    tableName: 'Users',
});

module.exports = User;
