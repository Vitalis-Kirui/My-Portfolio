const express = require('express');
const router = express.Router();
const contactcontrollers = require('../controllers/contact-controllers');

// creating a new message
router.post('/send-message', contactcontrollers.contactme);

// getting all messages
router.get('/get-messages', contactcontrollers.getallmessages);

// get a message by id
router.get('/get-message/:id', contactcontrollers.getsinglemessage);

// delete a message by id
router.delete('/delete-message/:id', contactcontrollers.deletemessage);

// Get unread messages
router.get('/get-unread-messages', contactcontrollers.getunreadmessages);

// Read messages
router.put('/read-message/:id', contactcontrollers.readMessage);

module.exports = router;