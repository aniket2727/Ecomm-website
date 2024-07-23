


//controller for userinfo
// userController.js

const User = require('../database/userInfo'); // Adjust the path according to your folder structure

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// Secret key for JWT
const JWT_SECRET = 'your_secret_key_here';

// Create a new user or register
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json({ message: "Email is already in use" });
        }
        // Create and save the new user
        const user = new User({ name, email, password });
        await user.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

// In your userController.js or equivalent file
//login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ status: 'failed', message: 'Email not found' });
        }

        if (user.password === password) {

            const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).json({ status: 'successful', message: 'Login successful', token ,email});
        } else {
            return res.status(401).json({ status: 'failed', message: 'Invalid password' });
        }
    } catch (error) {

        return res.status(500).json({ status: 'failed', message: 'Error logging in', error });
    }
};


// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

// Get a user by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
};

// Update a user
const updateUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { name, email, password },
            { new: true, runValidators: true }
        );
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};

module.exports = {
    loginUser,
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};
