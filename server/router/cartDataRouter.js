// code is written by aniket kadam
// router for cart data

const express = require('express');
const Router = express.Router();
const cartData = require('../controller/cartDataController');

Router.get('/getcart', cartData.getCartDataByEmail);
Router.post('/addcart', cartData.addCartDataByEmail);

module.exports = Router;
