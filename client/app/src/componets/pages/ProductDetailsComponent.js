import React from 'react';
import { useProducts } from '../Contextapis/ProductDatacontextAPI';

const ProductDetailsPage = () => {
 
    const { products } = useProducts(); // Access context

    console.log("this is product display page",products);

    // For example, display the first product's details
    const product = products[0]; // Adjust as needed


  return (
    <div>
      <h1>Product Details</h1>
      {product ? (
        <div>
          <h2>{product.productName}</h2>
          <img 
            src={product.image || 'https://via.placeholder.com/150'} 
            alt={product.productName} 
            className="w-full h-48 object-cover"
          />
          <p>Price: ${product.productPrice}</p>
          <p>Rating: {product.productRating}</p>
          <p>{product.productCaption}</p>
        </div>
      ) : (
        <p>No product details available</p>
      )}
    </div>
  );
};

export default ProductDetailsPage;
