// code is written by aniket kadam
// controllers for the product info

const Product = require('../database/productInfoSchema');


// get all products
c// Get all products
const getAllProducts = async (req, resp) => {
    try {
        const data = await Product.find();
        if (data.length > 0) {
            resp.status(200).json({ message: "Data is sent", result: data });
        } else {
            resp.status(404).json({ message: "Data not found" });
        }
    } catch (error) {
        resp.status(500).json({ message: error.message });
    }
};


// Get products by category
const getProductByCategory = async (req, res) => {
    const { category } = req.params;

    try {
        const result = await Product.find({ productCategory: category });
        if (result.length > 0) {
            res.status(200).json({ message: "Data is sent", result });
        } else {
            res.status(404).json({ message: "Data not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get products by price
const getProductByPrice = async (req, res) => {
    const { price } = req.params;
    console.log(price);

    try {
        const result = await Product.find({ productPrice: price });
        console.log("the result is",result);
        if (result.length > 0) {
            res.status(200).json({ message: "Data is sent", result });
        } else {
            res.status(404).json({ message: "Data not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get products by category and price
const getProductByCategoryAndPrice = async (req, res) => {
    const { category, price } = req.params;

    try {
        const result = await Product.find({ 
            productCategory: category,
            productPrice: price 
        });

        if (result.length > 0) {
            res.status(200).json({ message: "Data is sent", result });
        } else {
            res.status(404).json({ message: "Data not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getProductByCategory, getProductByPrice, getProductByCategoryAndPrice };
