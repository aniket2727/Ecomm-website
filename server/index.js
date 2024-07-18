// code is written by Aniket Kadam
// main entry point of the code 
// file name app.js

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Initialize cors properly
app.use(express.json());

require('./database/config'); 

const userInfoRouter = require('./router/userInfoRouter'); 

app.use('/app', userInfoRouter); 

const port = 9009;
app.listen(port, () => {
    console.log("server is started successfully", port); 
});
