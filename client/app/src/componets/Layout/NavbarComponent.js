// code is written by Aniket Kadam

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const NavbarComponent = () => {
    
    const [loginStatus, setLoginStatus] = useState('');
    const navigate = useNavigate();
   
   
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("email");
        setLoginStatus('');
        navigate('/home'); 
    }
     
    
 
    return (
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold">E-Comm</h1>
            </div>

            <div>
                <ul className="flex space-x-4">
                    <li className="hover:text-gray-400 cursor-pointer flex items-center" onClick={() => navigate('/usercartlist')}>
                        <FaShoppingCart className="mr-2" />
                        Cart
                    </li>
                    <li className="hover:text-gray-400 cursor-pointer flex items-center" onClick={() => navigate('/productbuylist')}>
                        <FaUser className="mr-2" />
                        Buy
                    </li>
                </ul>
            </div>

            <div>
                {loginStatus ? (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/login')}>
                            Login
                        </button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/register')}>
                            Register
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavbarComponent;
