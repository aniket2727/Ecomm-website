// Code is written by Aniket Kadam

const { ProductBuy } = require('../database/productBuySchema');

// Get product list by email
const getProductBuylistByEmail = async (req, resp) => {
  try {
    const { email } = req.body; 
    const result = await ProductBuy.find({ userEmail: email });
    if (result.length > 0) {
      resp.status(200).json({ message: "Data is sent", result });
    } else {
      resp.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    resp.status(500).json({ message: "Error", error });
  }
};

// Add product by email
const addProductBuylistByEmail = async (req, resp) => {
  try {
    const { userEmail, productId, productName, productImage, productCaption, productPrice } = req.body;

    const newProduct = new ProductBuy({
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
    console.log(error);
    resp.status(500).json({ message: "Error", error });
  }
};

module.exports = { getProductBuylistByEmail, addProductBuylistByEmail };
