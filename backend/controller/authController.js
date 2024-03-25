// authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../modals/userModals');
const generateToken = require('../config/generateToken')

// Register user
const  register = async function register(req, res) {
   
    const{ name , email , password} = req.body;

    if(!name || !email || !password ) {
        res.status(400);
        throw new Error("please Enter All the Fields");
    }
        
    const userExsist = await User.findOne({email});

    if(userExsist){
        res.status(400);
        throw new Error("user is already exsist");
    }
    
    const user = await User.create({
        name,
        email,
        password,
    });

    if(user){
        res.status(201).json({
            id : user.id,
            name : user.name,
            email : user.email,
            tokan :generateToken(user.id),
        })
    }
    else {
        res.status(400);
        throw new Error("Failed to create the user");
      }

}

// Login user
const login = async function login(req, res) {
     const {email , password} = req.body;
     const user = await User.findOne({email});
     
     if(!email){
        res.status(400);
        throw new Error("user is not register");
     }

     if( user && ( await user.matchPassword(password))){
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id),
          });
     }

     else {
        res.status(401);
        throw new Error("Invalid Email or Password");
      }


}

module.exports = {
    register,
    login
};
