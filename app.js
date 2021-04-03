const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const body = require('./body.json');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-user', (req, res, next) => {
  body.users.push(req.body.username);
  fs.writeFileSync('body.json', JSON.stringify(body, null, 2));

  // console.log(req.body.username, body);
  res.redirect('/');
});

app.use('/users', (req, res, next) => {
  res.send(body);
});

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(4000);
