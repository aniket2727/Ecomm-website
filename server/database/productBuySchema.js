
//id 
//product name
//product image
//caption
//price
// Code is written by Aniket Kadam
// Product Buy schema for listing products by users

const mongoose = require('mongoose');

// Define the schema
const productBuySchema = new mongoose.Schema({
  userEmail:{ 
    type:String,
    require:true},

  productId: {
    type: String,
    required: true,
    unique: true
  },
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
  }
});

// Create the model
const ProductBuy = mongoose.model('ProductBuy', productBuySchema);

module.exports = { ProductBuy };
