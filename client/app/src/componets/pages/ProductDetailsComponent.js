import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { id } = useParams(); // Retrieve the ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("productdata"));
    console.log("local storage data is ",storedData);
    if (storedData) {
      const productDetail = storedData.find(item => item._id === id);
      setProduct(productDetail);
    }
  }, [id]);

  console.log("produt selected is ",product);
  console.log('id is',id);

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
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetailsPage;
