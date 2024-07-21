
// Code is written by Aniket Kadam
// User buy and product carts data APIs

import { json } from "react-router-dom";

const addBuyProductByEmail = async (data) => {
    const { userEmail, productId, productName, productImage, productCaption, productPrice } = data;
  
    try {
      const response = await fetch('http://localhost:9009/app/addproductbuyemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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


  const fetchproductBuyListByEmail=async(email)=>{

    const respoce=await fetch('http://localhost:9009/app/getproductbyemail',{
      method:'get',
      body:json.stringify({email}),
      hedaers:{
        'Content-Type':'application/json'
      }
    })

    if(!respoce.ok){
      throw new Error ("failed to fech data");
    }

    const result=await respoce.json();
    return result;

  }

  const addCartDataByEmail = async (data) => {
    const { userEmail, productId, productName, productImage, productCaption, productPrice } = data;
  
    try {
      const response = await fetch('http://localhost:9009/app/addCartDatabuyemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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



  const fetchCartDatabyEmail=async(email)=>{

    const respoce=await fetch('http://localhost:9009/app/getcartsbyemail',{
      method:'get',
      body:json.stringify({email}),
      hedaers:{
        'Content-Type':'application/json'
      }
    })

    if(!respoce.ok){
      throw new Error ("failed to fech data");
    }

    const result=await respoce.json();
    return result;

  }



  export {addBuyProductByEmail,fetchproductBuyListByEmail,fetchCartDatabyEmail,addCartDataByEmail}
  