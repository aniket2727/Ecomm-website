// code is written by aniket kadam
// register component

import { isEmpty } from "../Helper/IsEmptyComponent";
import { isValidEmail } from "../Helper/IsEmailComponenet";
import { isValidName } from "../Helper/IsNameComponents";
import { isValidPassword } from "../Helper/IsPasswordComponent";
import { RegisterApi } from "../Api/AuthApis";

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const navigate=useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();

        let validationErrors = {};

        if (isEmpty(name) || !isValidName(name)) {
            validationErrors.name = 'Please enter a valid name (letters and spaces only).';
        }
        if (isEmpty(email) || !isValidEmail(email)) {
            validationErrors.email = 'Please enter a valid email address.';
        }
        if (isEmpty(password) || !isValidPassword(password)) {
            validationErrors.password = 'Password must be at least 8 characters long and include uppercase, lowercase, digit, and special character.';
        }

        if (Object.keys(validationErrors).length === 0) {
            console.log("Registering user with:", { name, email, password });

            try {
                const result = await RegisterApi({ name, email, password });
                console.log("The result of register API", result);
    
                if (result.status === 'successful') {
                    setSuccess(true);
                    setErrors({});
                    navigate('/home')
                } else {
                    setSuccess(false);
                    setErrors({ api: result.error || 'An unexpected error occurred' });
                }
            } catch (error) {
                console.error("Error registering user", error);
                setSuccess(false);
                setErrors({ api: error.message });
            }
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Register Here</h1>
            <form onSubmit={handleRegister} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                    {errors.name && <span className="text-red-500 text-xs italic">{errors.name}</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                    {errors.email && <span className="text-red-500 text-xs italic">{errors.email}</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                    {errors.password && <span className="text-red-500 text-xs italic">{errors.password}</span>}
                </div>

                {errors.api && <div className="text-red-500 text-xs italic mb-4">{errors.api}</div>}
                {success && <div className="text-green-500 text-xs italic mb-4">Registration successful!</div>}

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterComponent;