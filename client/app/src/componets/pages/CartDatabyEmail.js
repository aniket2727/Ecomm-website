import React, { useEffect, useState } from 'react';
import { fetchCartDatabyEmail } from '../Api/productapi/Userbuyingandcartapis';

const CartDataByEmailDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('authToken');
  const email = localStorage.getItem('email');

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        const result = await fetchCartDatabyEmail(email, token);
        if (result.error) {
          throw new Error(result.error);
        }
        // console.log(result);
        setData(result.result); // Extract the cart data from the result
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (email && token) {
      handleFetchData();
    } else {
      setLoading(false);
      setError("Email or token not found");
    }
  }, [email, token]);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Carts List</h1>
      {data.length > 0 ? (
        <ul className="space-y-4">
          {data.map((item, index) => (
            <li key={index} className="p-4 bg-white shadow rounded-lg flex">
              <img src={item.productImage || 'https://via.placeholder.com/150'} alt={item.productName} className="w-16 h-16 object-cover mr-4" />
              <div>
                <h2 className="text-lg font-bold">{item.productName}</h2>
                <p className="text-gray-700">{item.productCaption}</p>
                <p className="text-gray-900 font-semibold">${item.productPrice}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500">No cart data available.</div>
      )}
    </div>
  );
};

export default CartDataByEmailDisplay;
