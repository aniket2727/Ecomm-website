// code is written by aniket kadam
// controller for carts data

const cartData = require('../database/cartDataSchema');

// Get product list by email
const getCartDataByEmail = async (req, resp) => {
  try {
    const { email } = req.body;

    if (!email) {
      return resp.status(400).json({ message: "Email is required" });
    }

    const result = await cartData.find({ userEmail: email });
    if (result.length > 0) {
      resp.status(200).json({ message: "Data is sent", result });
    } else {
      resp.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    console.error("Error fetching cart data:", error);
    resp.status(500).json({ message: "Internal Server Error", error });
  }
};

// Add product by email
// Add product by email
const addCartDataByEmail = async (req, resp) => {
    try {
      const { userEmail, productId, productName, productImage, productCaption, productPrice } = req.body;
  
      if (!userEmail || !productId || !productName || !productImage || !productCaption || !productPrice) {
        return resp.status(400).json({ message: "All fields are required" });
      }
  
      const newProduct = new cartData({
        userEmail,
        productId,
        productName,
        productImage,
        productCaption,
        productPrice
      });
  
      const result = await newProduct.save();
      resp.status(201).json({ message: "Product added successfully", result });
  
    } catch (error) {
      console.error("Error adding product to cart:", error);
      resp.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  };
  
  module.exports = { getCartDataByEmail, addCartDataByEmail };

module.exports = { getCartDataByEmail, addCartDataByEmail };
