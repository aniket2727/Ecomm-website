


// code is written by aniket kadam

import React from 'react';
import { useProducts } from '../Contextapis/ProductDatacontextAPI';

const ProductBuyingPage = () => {

    const { products } = useProducts(); // Access context

     
    console.log(" product display ",products);
    // For example, display the first product's details
    const product = products[0]; // Adjust as needed

    console.log("this is product display page",product);

  


  return (
    <div>
      <h1>Product Details</h1>
    </div>  
  );
};

export default ProductBuyingPage;
