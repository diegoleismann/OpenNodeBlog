const express = require('express');
const router = express.Router();
const UserController = require('./UserController.js')
const User = new UserController();

router.get('/page/:page', User.getByPage);
router.get('/:id', User.getById);

module.exports = router;
