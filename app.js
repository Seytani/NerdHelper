require('dotenv').config();
let express = require('express');
let app = express();
let sequelize = require('./db');
let user = require('./controllers/user-controller');
let topic = require('./controllers/topic-controller');
let question = require('./controllers/question-controller');

app.use(express.json());
sequelize.sync();

app.use(require('./middleware/headers'));
app.use('/user', user);
// app.use(require('./middleware/validate-session'));
app.use('/topics', topic);
app.use('/question', question);

app.listen(process.env.PORT, () => console.log('****** NODEMON PORT 3001 *******'));
