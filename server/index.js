// code is written by Aniket Kadam
// main entry point of the code 
// file name app.js

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware
app.use(cors()); // Initialize CORS
app.use(express.json()); // For parsing application/json
app.use(cookieParser()); // For parsing cookies

// Secret key for JWT
const JWT_SECRET = 'your_secret_key_here';

// In-memory "database" for demonstration
const users = [];

// Import database configuration
require('./database/config'); 

// Import routers
const userInfoRouter = require('./router/userInfoRouter'); 
const productInfoRouter = require('./router/productInfoRouter');
const productBuy=require('./router/productBuyRouter')

// Use routers
app.use('/app', userInfoRouter); 
app.use('/app', productInfoRouter);
app.use('/app',productBuy);

const port = 9009;
app.listen(port, () => {
    console.log(`Server is started successfully on port ${port}`); 
});
