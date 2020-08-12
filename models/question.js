// const Topic = require('./topic');

module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('question', {
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
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        topic_id: {
            type: DataTypes.INTEGER,
            references: {
                model: sequelize.Topic,
                key: 'id'
            }
        }
    });

}




