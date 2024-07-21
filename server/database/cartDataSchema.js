const mongoose = require('mongoose');

const cartDataSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  productId: { type: String, required: true },
  productName: { type: String, required: true },
  productImage: { type: String, required: true },
  productCaption: { type: String, required: true },
  productPrice: { type: Number, required: true }
});

module.exports = mongoose.model('CartData', cartDataSchema);
