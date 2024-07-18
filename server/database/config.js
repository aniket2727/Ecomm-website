
// connection to the database
// file name config.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/database1')
    .then(() => {
        console.log("Connection is successful");
    })
    .catch((error) => {
        console.log("Connection error: ", error);
    });
