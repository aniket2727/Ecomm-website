// models/user.js

const mongoose = require('mongoose');

const userinfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userinfoSchema);

module.exports = User;
