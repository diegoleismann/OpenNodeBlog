const express = require('express');
const router = express.Router();
const PostController = require('./PostController.js')
const Post = new PostController();

router.post('/', Post.create);
router.put('/:id', Post.update);
router.delete('/:id', Post.delete);

module.exports = router;