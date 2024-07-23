/* eslint-disable no-unused-vars */


// code is wriiten by aniket kadam
//product buy by user list display page
import React, { useEffect, useState } from 'react'

import { fetchproductBuyListByEmail } from "../Api/productapi/Userbuyingandcartapis";


const Productbuylist=()=>{
    const [data,setData]=useState([]);

    const token= localStorage.getItem('authToken');
    const email =localStorage.getItem('email');


    useEffect(()=>{

        const handlefetchData=async()=>{
            try{
                 
                const result=await fetchproductBuyListByEmail(email,token);
                setData(result);
                console.log(result);
            }
            catch(error){
                console.log("error is error",error)
            }

        }
         
        handlefetchData();

    },[email,token]);
    return(
        <div>
           <h1>product buy list</h1>
        </div>
    )
};


export default Productbuylist;