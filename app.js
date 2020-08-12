require('dotenv').config();
let express = require('express');
let app = express();
let sequelize = require('./db');
let user = require('./controllers/user-controller');
// let caseType = require('./controllers/case-controller');
// let todo = require('./controllers/todo-controller');

app.use(express.json());

sequelize.sync();

app.use('/user', user);
// app.use(require('./middleware/validate-session'));
// app.use('/call', call);
// app.use('/case', caseType);
// app.use('/todo', todo);

app.listen(3001, () => console.log('****** NODEMON PORT 3001 *******'));
