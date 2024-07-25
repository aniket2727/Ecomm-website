import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBuyProductByEmail } from '../Api/productapi/Userbuyingandcartapis';

const ProductBuyingPage = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Default quantity
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("productdata"));
    const productId = localStorage.getItem("currentProductId");
    const storedQuantity = JSON.parse(localStorage.getItem(`product_${productId}_quantity`)) || 1;

    if (storedData && productId) {
      const productDetail = storedData.find(item => item._id === productId);
      setProduct(productDetail);
      setQuantity(storedQuantity);
      setTotalPrice(productDetail ? productDetail.productPrice * storedQuantity : 0);
    }
  }, []);

  const handleConfirmBuy = async () => {
    const token = localStorage.getItem('authToken');
    const email = localStorage.getItem('email');

    if (product && token && email) {
      const data = {
        userEmail: email,
        productId: product._id,
        productName: product.productName,
        productImage: product.productImage,
        productCaption: product.productCaption,
        productPrice: totalPrice,
      };

      try {
        const result = await addBuyProductByEmail(data, token);
        if (result.error) {
          console.error(result.error);
        } else {
          // Clear localStorage
          localStorage.removeItem("currentProductId");
          localStorage.removeItem(`product_${product._id}_quantity`);
          // Navigate to the home page
          navigate('/home');
        }
      } catch (error) {
        console.error('Error confirming purchase:', error);
      }
    } else {
      console.error('Product or user information missing');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Buying Page</h1>
      {product ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={product.image || 'https://via.placeholder.com/150'}
            alt={product.productName}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{product.productName}</h2>
            <p className="text-gray-700">Price: ${product.productPrice}</p>
            <p className="text-yellow-500">Rating: {product.productRating}</p>
            <p className="text-gray-600">{product.productCaption}</p>
            <p className="text-xl font-bold mt-4">Quantity: {quantity}</p>
            <p className="text-xl font-bold mt-4">Total Price: ${totalPrice.toFixed(2)}</p>

            <div className="mt-4">
              <button 
                onClick={handleConfirmBuy} 
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Confirm Buy
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

export default ProductBuyingPage;
