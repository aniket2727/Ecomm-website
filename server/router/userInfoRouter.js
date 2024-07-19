// userInfoRouter.js

const express = require('express');
const router = express.Router();
const userController = require('../controller/userInfoController'); // Ensure the path is correct

// const authenticateToken=require('../middleware/JwtAuthmiddleware');

// // Apply authentication middleware
// router.use(authenticateToken);


// Create a new user
router.post('/register', userController.createUser);

//Check login 
router.post('/login', userController.loginUser);

// Get all users
router.get('/userinfo', userController.getUsers);

// Get a user by ID
router.get('/userinfo/:id', userController.getUserById);

// Update a user
router.put('/userinfo/:id', userController.updateUser);

// Delete a user
router.delete('/userinfo/:id', userController.deleteUser);

module.exports = router;
