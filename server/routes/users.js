const express = require('express');

const usersControllers = require('../controllers/users')

const router = express.Router();

router.post('/add-user', usersControllers.postAddUser);

router.get('/users', usersControllers.getUsers);

module.exports = router;
