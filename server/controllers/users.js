const User = require('../models/users');

exports.postAddUser = (req, res, next) => {
  const newUser = req.body;
  // const user = new User(req.body);
  // const newUser = user.save();
  // res.set('Content-Type', 'application/json')
  res.status(201).json(newUser);
};

exports.getUsers = (req, res, next) => res.send(User.fetchAll());
