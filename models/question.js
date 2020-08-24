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
            type: DataTypes.JSON,
            allowNull: false
        },
        review: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
}




