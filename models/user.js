const { DataTypes } = require('sequelize');

module.exports = (sequelize) => { 
    sequelize.define('user', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
}