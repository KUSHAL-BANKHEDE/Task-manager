const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

// Register route
router.route('/signup').post(authController.register);

//router.post('/register', authController.register);

// Login route
router.post('/login', authController.login);

module.exports = router;