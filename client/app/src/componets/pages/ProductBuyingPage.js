import React, { useEffect, useState } from 'react';

const ProductBuyingPage = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Default quantity
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("productdata"));
    console.log("the product data from localhost",storedData)
    const productId = localStorage.getItem("currentProductId");
    console.log("the product id from localhost",productId)
    const storedQuantity = JSON.parse(localStorage.getItem(`product_${productId}_quantity`)) || 1;
    console.log("the product count from localhost",storedQuantity);

    if (storedData && productId) {
      const productDetail = storedData.find(item => item._id === productId);
      setProduct(productDetail);
      setQuantity(storedQuantity);
      setTotalPrice(productDetail ? productDetail.productPrice * storedQuantity : 0);
    }
  }, []);

  const handleConfirmBuy = () => {
    console.log(`Confirmed purchase of ${quantity} units of ${product.productName}`);
    // Implement confirmation logic, e.g., sending order to backend
    // Clear localStorage
    const productId = localStorage.getItem("currentProductId");
    localStorage.removeItem("currentProductId");
    if (productId) {
      localStorage.removeItem(`product_${productId}_quantity`);
    }
    // Optionally redirect or show confirmation message
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
