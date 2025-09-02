const express = require('express');
const router = express.Router();
const PostController = require('./PostController.js')
const Auth = require('../core/authorization.js');
const Post = new PostController();

router.get('/search/:text', Auth.authorizationToken, Post.getBySearch);
router.get('/page/:page', Auth.authorizationToken, Post.getByPage);
router.get('/:id', Auth.authorizationToken, Post.getById);
router.post('/', Auth.authorizationToken, Post.create);
router.put('/:id', Auth.authorizationToken, Post.update);
router.delete('/:id', Auth.authorizationToken, Post.delete);

module.exports = router;