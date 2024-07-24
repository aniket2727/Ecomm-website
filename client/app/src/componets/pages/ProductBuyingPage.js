


// code is written by aniket kadam

import React from 'react';


const ProductBuyingPage = () => {
    // Retrieve data from localStorage
    const storedData = JSON.parse(localStorage.getItem("productdata"));
    console.log("Stored data from localStorage", storedData);




    return (
        <div>
            <h1>Product Details</h1>
        </div>
    );
};

export default ProductBuyingPage;
