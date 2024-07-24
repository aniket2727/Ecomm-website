/* eslint-disable no-unused-vars */
// Code is written by Aniket Kadam

import React, { useEffect, useState } from 'react';
import { FetchAllData } from '../Api/productapi/ProductData';
import { Link } from 'react-router-dom';

const HomePageComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        const result = await FetchAllData();
        setData(result);

        // Store data in localStorage (as a string)
        localStorage.setItem("productdata", JSON.stringify(result));
        console.log("The values of data are ", result);
      } catch (error) {
        console.log("Error occurred: ", error);
      }
    };

    handleFetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <Link
            to={`/product/${product._id}`}
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePageComponent;