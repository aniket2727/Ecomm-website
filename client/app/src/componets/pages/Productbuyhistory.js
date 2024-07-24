/* eslint-disable no-unused-vars */

// code is written by aniket kadam
// carts by user list display page
import React, { useEffect, useState } from 'react';
import { fetchproductBuyListByEmail } from '../Api/productapi/Userbuyingandcartapis';

const CartDataByEmailDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('authToken');
  const email = localStorage.getItem('email');

  useEffect(() => {
    const handlefetchData = async () => {
      try {
        const result = await fetchproductBuyListByEmail(email, token);

        if (!result || !Array.isArray(result.result)) {
          throw new Error("Received data is not an array");
        }

        setData(result.result);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching cart data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    handlefetchData();
  }, [email, token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart List</h1>
      {data.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((product, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={product.productImage || 'https://via.placeholder.com/150'}
                alt={product.productName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{product.productName}</h2>
                <p className="text-gray-700">${product.productPrice}</p>
                <p className="text-gray-600">{product.productCaption}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartDataByEmailDisplay;
