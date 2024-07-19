// code is written by Aniket Kadam

import React, { useState, useEffect } from 'react';

const NavbarComponent = () => {
    const [loginStatus, setLoginStatus] = useState('');

    useEffect(() => {
        setLoginStatus(localStorage.getItem('authToken'));
    }, []);

    return (
        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold">E-Comm</h1>
            </div>

            <div>
                <ul className="flex space-x-4">
                    <li className="hover:text-gray-400 cursor-pointer">Cart</li>
                    <li className="hover:text-gray-400 cursor-pointer">Buy</li>
                </ul>
            </div>

            <div>
                {loginStatus ? (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Logout
                    </button>
                ) : (
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Login
                    </button>
                )}
            </div>
        </div>
    );
};

export default NavbarComponent;
