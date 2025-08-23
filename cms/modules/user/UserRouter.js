const express = require('express');
const router = express.Router();
const UserController = require('./UserController.js')
const User = new UserController();

router.get('/page/:page', User.getByPage);
router.get('/:id', User.getById);
router.post('/', User.create);
router.put('/:id', User.update);
router.delete('/:id', User.delete);

module.exports = router;
