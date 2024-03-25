// authMiddleware.js

const jwt = require('express-jwt');

// Middleware to verify JWT token
function authMiddleware() {
    return jwt({
        secret: 'your_secret_key', // Replace with your own secret key
        algorithms: ['HS256']
    }).unless({
        path: [
            '/api/auth/login',
            '/api/auth/register'
        ]
    });
}

module.exports = authMiddleware;
