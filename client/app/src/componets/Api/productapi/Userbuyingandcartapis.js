// Code is written by Aniket Kadam
// User buy and product carts data APIs


// Add Buy Product by Email
const addBuyProductByEmail = async (data, token) => {
  const { userEmail, productId, productName, productImage, productCaption, productPrice } = data;

  try {
    const response = await fetch('http://localhost:9009/app/addproductbuyemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        userEmail,
        productId,
        productName,
        productImage,
        productCaption,
        productPrice,
      }),
    });

    if (!response.ok) {
      throw new Error('Unable to add data');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return { error: error.message };
  }
};

// Fetch Product Buy List by Email
const fetchproductBuyListByEmail = async (email, token) => {
  try {
    const response = await fetch('http://localhost:9009/app/getproductbyemail', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return { error: error.message };
  }
};

// Add Cart Data by Email
const addCartDataByEmail = async (data, token) => {
  const { userEmail, productId, productName, productImage, productCaption, productPrice } = data;

  try {
    const response = await fetch('http://localhost:9009/app/addcart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        userEmail,
        productId,
        productName,
        productImage,
        productCaption,
        productPrice,
      }),
    });

    if (!response.ok) {
      throw new Error('Unable to add data');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return { error: error.message };
  }
};

// Fetch Cart Data by Email
const fetchCartDatabyEmail = async (email, token) => {
  try {
    const response = await fetch('http://localhost:9009/app/getcart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return { error: error.message };
  }
};

export { addBuyProductByEmail, fetchproductBuyListByEmail, fetchCartDatabyEmail, addCartDataByEmail };
