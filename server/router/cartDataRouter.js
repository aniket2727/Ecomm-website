const express = require('express');
const Router = express.Router();
const cartData = require('../controller/cartDataController');
const authenticateToken = require('../middleware/JwtAuthmiddleware'); // Import the middleware

Router.get('/getcart', authenticateToken, cartData.getCartDataByEmail); // Apply middleware
Router.post('/addcart', authenticateToken, cartData.addCartDataByEmail); // Apply middleware

module.exports = Router;
