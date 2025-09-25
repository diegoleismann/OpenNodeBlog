const express = require('express');
const router = express.Router();
const ContactController = require('./ContactController.js')

router.post('/', Contact.send);


module.exports = router;
