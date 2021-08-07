const bcrypt = require('bcryptjs');

const User = require('../models/users');

const token = 'kljhLKJDhflkh3983YFyhedh23iohnfs8D';

exports.signup = (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) return res.send('User with this email exist');
      if ( password !== confirmPassword ) return res.send('Passwords differ');
      bcrypt.hash(password, 10)
        .then((hashPassword) => {
          const newUser = new User({ 
            name,
            email,
            password: hashPassword
          });
          newUser.save();
          res.send('Successfully signup');
        });
    });
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) return res.send('User with this email not exist');
      bcrypt.compare(password, user.password)
        .then((isValid) => {
          if ( !isValid ) return res.send('Password invalid');
          res.json(user._id.toString() + '.' + token);
        })
        .catch((err) => {
          console.log(err);
          res.send('server error');
        });
    });
};
