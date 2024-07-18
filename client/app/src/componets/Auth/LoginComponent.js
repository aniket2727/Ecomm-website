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
        <div>
            <h1>Login Here</h1>
            <form onSubmit={handleLogin}>
                <label>Enter Email</label>
                <input
                    placeholder="Email"
                    required
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {formState && isEmpty(email) && <span>Please enter your email</span>}

                <label>Enter Password</label>
                <input
                    placeholder="Password"
                    required
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {formState && isEmpty(password) && <span>Please enter your password</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginComponent;
