const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const mongoConnect = require('./utils/db').mongoConnect;

const usersRoutes = require('./routes/users');

const app = express();


mongoConnect();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/.netlify/functions/index', usersRoutes);
app.use((req, res, next) => res.status(404).send(['page not found']));

module.exports = app;
module.exports.handler = serverless(app);
