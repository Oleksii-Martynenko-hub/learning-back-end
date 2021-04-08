const User = require('../models/users');

exports.addUser = (req, res, next) => {
  const user = new User(req.body);
  const newUser = user.save();
  res.status(201).json(newUser);
};

exports.userById = (req, res, next) => {
  const id = req.params.id;
  User.getById(id, (userById) => res.send(userById));
};

exports.editUser = (req, res, next) => {
  const id = req.params.id;
  const newValues = req.query;
  User.editUser(id, newValues, () => {
    User.getById(id, (userById) => res.send(userById));
  });
};

exports.deleteUser = (req, res, next) => {
  const id = req.params.id;
  
  User.deleteUser(id, (err) => {
    User.getById(id, () => {
      res.send(err ? 'User successfully deleted' : 'Something wrong!');
    });
  });
};

exports.allUsers = (req, res, next) => {
  User.fetchAll((usersData) => res.send(usersData));
};
