const express = require('express');
const Router = express.Router();
const productInfo = require('../controller/productInfoController');


//Route to get all products
Router.get('/getallproducts',productInfo.getAllProducts)

// Route to get products by category
Router.get('/products/category/:category', productInfo.getProductByCategory);

// Route to get products by price
Router.get('/products/price/:price', productInfo.getProductByPrice);

// Route to get products by category and price
Router.get('/products/category/:category/price/:price', productInfo.getProductByCategoryAndPrice);

module.exports = Router;
