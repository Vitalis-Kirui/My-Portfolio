const { json } = require('body-parser');
const Message = require('../models/contact-model')

const contactMe = (req, res) => { 

    let messageBody = req.body;

    let message = new Message(messageBody);

    message.save((error, savedmessage) => {
        if (error) {
            console.error(error);
        }
        else { 
            res,json({ok: true, message: "Messave saved successfully"})
        }
     });

};

module.exports = {
    contactMe
}