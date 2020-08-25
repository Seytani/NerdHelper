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
        incorrectAnswer_1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        incorrectAnswer_2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        incorrectAnswer_3: {
            type: DataTypes.STRING,
            allowNull: false
        },
        review: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
}




