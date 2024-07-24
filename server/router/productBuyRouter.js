// Code is written by Aniket Kadam
// Product Buy router

const express = require('express');
const router = express.Router();
const productBuyController = require('../controller/productBoyController');
const authenticationToken=require('../middleware/JwtAuthmiddleware');
// Route to add a product
router.post('/addproductbuyemail', productBuyController.addProductBuylistByEmail);

// Route to get products by email
router.post('/getproductbyemail', productBuyController.getProductBuylistByEmail);

module.exports = router;
