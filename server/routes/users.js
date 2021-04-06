const express = require('express');

const usersControllers = require('../controllers/users')

const router = express.Router();

router.post('/add-user', usersControllers.postAddUser);
// router.post('/add-user', (req, res, next) => {
//   const user = req.body;
//   res.json(user);
//   res.end();
// });

router.get('/users', usersControllers.getUsers);

module.exports = router;
