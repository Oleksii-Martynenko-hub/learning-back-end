const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

const app = express();

const URI = process.env.MONGO_URI;

mongoose
  .connect('mongodb+srv://m4rtin:phjkGefURce6SMhE@clusternotes.zbn60.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { 
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then((res) => console.log('Connected!'))
  .catch((err) => console.log('error connect', err))
  

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', usersRoutes);
app.use('/', authRoutes);
app.use((req, res, next) => res.status(404).send(['page not found']));

module.exports = app;
