const express = require('express');
const router = express.Router();
const UserController = require('./UserController.js')
const Auth = require('../core/authorization.js')
const User = new UserController();

router.post('/auth/', User.auth);
router.get('/search/:text', Auth.authorizationToken, User.getBySearch);
router.get('/page/:page', Auth.authorizationToken, User.getByPage);
router.get('/:id', Auth.authorizationToken, User.getById);
router.post('/', Auth.authorizationToken, User.create);
router.put('/:id', Auth.authorizationToken, User.update);
router.delete('/:id', Auth.authorizationToken, User.delete);

module.exports = router;
