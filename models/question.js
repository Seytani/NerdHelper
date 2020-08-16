const { DataTypes } = require('sequelize');

module.exports = (sequelize) => { 
    sequelize.define('question', { 
        question: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correctAnswer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        incorrectAnswers: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            allowNull: false
        }
    });
}




