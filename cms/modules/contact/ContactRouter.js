const express = require('express');
const router = express.Router();
const CoontactController = require('./ContactController.js')
const Contact = new CoontactController();

router.post('/', Contact.send);

module.exports = router;
