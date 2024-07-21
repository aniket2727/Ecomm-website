




/* eslint-disable no-unused-vars */


// code is wriiten by aniket kadam
//product buy by user list display page
import React, { useEffect, useState } from 'react'


import { fetchCartDatabyEmail } from '../Api/productapi/Userbuyingandcartapis';

const CartDataByEmailDisplay=()=>{
    const [data,setData]=useState([]);

    const email="aniketkadam@gamil.com";

    useEffect(()=>{

        const handlefetchData=async()=>{
            try{
                 
                const result=await fetchCartDatabyEmail(email);
                setData(result);
                console.log(result);
            }
            catch(error){
                console.log("error is error",error)
            }

        }
         
        handlefetchData();

    },[]);
    return(
        <div>
           <h1>product buy list</h1>
        </div>
    )
};


export default CartDataByEmailDisplay;