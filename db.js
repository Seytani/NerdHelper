const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('nerd-helper', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
.then(() => console.log('*****POSTGRES CONNECTION SUCCESFUL*****'),(err) => console.log(err))

module.exports = sequelize;
