const Message = require('../models/contact-model')

//Saving a message
const contactme = (req, res) => { 

    let messageBody = req.body;

    let message = new Message(messageBody);

    message.save()
        .then((savedmessage) => {
            res.json({ ok: true, message: "Message saved successfully" })
        })
        .catch((error) => { 
            res.json({ ok: false, message: "Error saving message" });
            console.error(error);
        });

};

// Fetching all the messages sent in order of time sent
const getallmessages = (req, res) => {

    Message.find().sort({ "createdAt": -1 })
        .then((messages) => {
            let totalmessages = messages.length;
            res.json({ Total: totalmessages, messages: messages });
        })
        .catch((error) => {
            res.json({ ok: false, message: "There was an error fetching messages" });
            console.error(error);
         });
    
}

// Getting a single message
const getsinglemessage = (req, res) => { 

    let id = req.params.id;
    
    Message.findById(id)
        .then((message) => {
            res.json({message: message});
        })
        .catch((error) => {
            res.json({ message: "There was an error fetching message" })
            console.error(error);
        })
};

// Deleting a message
const deletemessage = (req, res) => { 

    let id = req.params.id;

    Message.findByIdAndDelete(id)
        .then((success) => {
            res.json({message: "Message deleted successfully"})
        })
        .catch((error) => { 
            res.json({ message: "Error deleting message" })
            console.log(error)
        })
};

// Fetching unread messages
const getunreadmessages = (req, res) => { 

    Message.find({ status: 'unread' })
        .then((unreadmessages) => {
            
            let total = unreadmessages.length;

            res.json({ total: total, messages: unreadmessages });
        }).
        catch((error) => { 
            res.json({ message: "An error occurred fetching unread messages" })
            console.error(error);
        });

};

module.exports = {
    contactme,
    getallmessages,
    getsinglemessage,
    deletemessage,
    getunreadmessages
}