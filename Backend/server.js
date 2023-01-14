const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const config = require('./config/config-variables');
const contactroutes = require('./routes/contact-routes');

const app = express();

// Using cors
app.use(cors());

// using body parser
app.use(bodyparser.json());

// Connecting to the database
mongoose.connect(config.dbConnection)
    .then((success) => {
        app.listen(3000)
        console.log("Database connection established successfully");
    })
    .catch((error) => { 
        console.log("Error trying to connect to database", error)
    });

    // Listening for requests
app.get('', (req, res) => { 
    res.json({ status: 200, ok : true })
})

// Using contact me routes
app.use('/contact', contactroutes);