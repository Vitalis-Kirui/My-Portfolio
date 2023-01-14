const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    names: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Contact', contactSchema, 'contactmessages')