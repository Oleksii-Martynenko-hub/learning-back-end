const User = require('../models/users');

exports.postAddUser = (req, res, next) => {
  const user = new User(req.body);
  const newUser = user.save();
  res.send(newUser);
};

exports.getUsers = (req, res, next) => res.send(User.fetchAll());
