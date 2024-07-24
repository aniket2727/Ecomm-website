import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { id } = useParams(); // Retrieve the ID from the URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // State for product quantity

  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("productdata"));
    if (storedData) {
      const productDetail = storedData.find(item => item._id === id);
      setProduct(productDetail);
      const storedQuantity = JSON.parse(localStorage.getItem(`product_${id}_quantity`)) || 1;
      setQuantity(storedQuantity);
    }
  }, [id]);

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      localStorage.setItem(`product_${id}_quantity`, JSON.stringify(newQuantity));
      return newQuantity;
    });
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity > 1 ? prevQuantity - 1 : 1;
      localStorage.setItem(`product_${id}_quantity`, JSON.stringify(newQuantity));
      return newQuantity;
    });
  };

  // Handle the buy action
  const handleBuy = () => {
    localStorage.setItem("currentProductId", id); // Store the current product ID
    navigate('/productbuy');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      {product ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={product.image || 'https://via.placeholder.com/150'}
            alt={product.productName}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{product.productName}</h2>
            <p className="text-gray-700">${product.productPrice}</p>
            <p className="text-yellow-500">Rating: {product.productRating}</p>
            <p className="text-gray-600">{product.productCaption}</p>

            <div className="flex items-center mt-4">
              <button 
                onClick={decreaseQuantity} 
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
              >
                -
              </button>
              <span className="text-xl font-bold mx-2">{quantity}</span>
              <button 
                onClick={increaseQuantity} 
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg ml-2"
              >
                +
              </button>
            </div>

            <div className="mt-4">
              <button 
                onClick={handleBuy} 
                className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Buy
              </button>

              <button 
                onClick={() => console.log(`Cancelled purchase of ${product.productName}`)} 
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetailsPage;
