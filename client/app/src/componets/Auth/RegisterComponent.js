// code is written by aniket kadam
// register component

import { isEmpty } from "../Helper/IsEmptyComponent";
import { isValidEmail } from "../Helper/IsEmailComponenet";
import { isValidName } from "../Helper/IsNameComponents";
import { isValidPassword } from "../Helper/IsPasswordComponent";
import React from "react";
import { useState } from "react";


const RegisterComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleRegister = (event) => {
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
            validationErrors={}
            setErrors('')
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div>
            <h1>Register Here</h1>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                    {errors.name && <span>{errors.name}</span>}
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterComponent;
