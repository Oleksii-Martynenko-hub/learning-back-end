exports.signup = (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  
  const user = new User(req.body);

  user.save().then((user) => res.status(201).json(user));
};