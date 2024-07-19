/* eslint-disable no-unused-vars */

// code is written by aniket kadam
// login component 

import React from "react";
import {useState} from 'react'

import { isEmpty } from "../Helper/IsEmptyComponent"; 

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formState, setFormState] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        
        // Check if fields are empty
        if (isEmpty(email) || isEmpty(password)) {
            setFormState(true);
        } else {
            console.log("The value of email and password is", email, password);
            setFormState(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-3xl font-bold mb-6">Login Here</h1>
    <form onSubmit={handleLogin} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Enter Email</label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
            required
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        {formState && isEmpty(email) && <span className="text-red-500 text-xs italic">Please enter your email</span>}

        <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="password">Enter Password</label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
            required
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        {formState && isEmpty(password) && <span className="text-red-500 text-xs italic">Please enter your password</span>}

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6">
            Submit
        </button>
    </form>
</div>

    );
};

export default LoginComponent;
