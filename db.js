const { Sequelize } = require('sequelize');
const Question = require('./models/question');
const Topic = require('./models/topic');
const User = require('./models/user');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
})

Question(sequelize); // initializes models
Topic(sequelize);
User(sequelize);

const { user, topic, question } = sequelize.models;

user.hasMany(topic);
topic.belongsTo(user);
topic.hasMany(question);
question.belongsTo(topic);


sequelize.authenticate()
.then(() => console.log('*****POSTGRES CONNECTION SUCCESFUL*****'),(err) => console.log(err))

module.exports = sequelize;
