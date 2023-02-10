const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./routes/');
const passport = require('passport');
const session = require('express-session');



console.log('environment', process.env.ENVIRONMENT);
console.log('PORT', process.env.PORT);
console.log('MONGO_CONNECTION_STRING', process.env.MONGO_CONNECTION_STRING);

if(process.env.ENVIRONMENT !== 'production') {
    require('dotenv').config();
};

const app = express();

require('./config/passport')(passport);

// TODO: Add in app.use(session) etc...

const port = process.env.PORT || 3080;

app.use(express.static(path.join(__dirname, './ui/build')));
app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});