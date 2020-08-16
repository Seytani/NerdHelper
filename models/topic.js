const { DataTypes } = require('sequelize');

module.exports = (sequelize) => { 
    sequelize.define('topic', {
        name: 
        {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
}
