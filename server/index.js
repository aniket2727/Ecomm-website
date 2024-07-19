// code is written by Aniket Kadam
// main entry point of the code 
// file name app.js

const express = require('express');
const cors = require('cors');
const app = express();

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

// Middleware
app.use(express.json()); // For parsing application/json
app.use(cookieParser()); // For parsing cookies

// In-memory "database" for demonstration
const users = [];

// Secret key for JWT
const JWT_SECRET = 'your_secret_key_here';

app.use(cors()); // Initialize cors properly
app.use(express.json());

require('./database/config'); 

const userInfoRouter = require('./router/userInfoRouter'); 

app.use('/app', userInfoRouter); 

const port = 9009;
app.listen(port, () => {
    console.log("server is started successfully", port); 
});
