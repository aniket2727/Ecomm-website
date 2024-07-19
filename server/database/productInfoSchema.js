// code is written by aniket kadam
//schema for the products

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    productCaption: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productRating: {
        type: Number,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
