// Code is written by Aniket Kadam
// Product Buy router

const express = require('express');
const router = express.Router();
const productBuyController = require('../controller/productBoyController');

// Route to add a product
router.post('/addproductbuyemail', productBuyController.addProductBuylistByEmail);

// Route to get products by email
router.get('/getproductbyemail', productBuyController.getProductBuylistByEmail);

module.exports = router;
