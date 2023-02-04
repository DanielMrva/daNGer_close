const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


console.log('environment', process.env.ENVIRONMENT);
console.log('PORT', process.env.PORT);
console.log('MONGO_CONNECTION_STRING', process.env.MONGO_CONNECTION_STRING);

if(process.env.ENVIRONMENT !== 'production') {
    require('dotenv').config();
};

const {userController, encounterController, commentController} = require('./controller/');

const app = express();
const port = process.env.PORT || 3080;

app.use(express.static(path.join(__dirname, './ui/build')));
app.use(bodyParser.json());

app.use(routes);

// app.get, post, put, etc.  May need to LOL put some sort of API controller in?...
// TODO: Use a "routes" folder, ala social_net_work project

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});