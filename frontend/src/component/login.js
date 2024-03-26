import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      
      setLoading(false);
      return;
    }
    console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
     
      const { data } = await axios.post(
        "/api/login",
        { email, password },
        config
      );

      console.log(JSON.stringify(data));
      
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate('/lists'); 
      
     
    } catch (error) {
      
      setLoading(false);
    }

  };
    
  return (
    <div className="flex flex-col space-y-6">
    <div className="flex flex-col">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email Address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Enter Your Email Address"
        required
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          id="password"
          name="password"
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter Password"
          required
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
          <button
            type="button"
            className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            onClick={handleClick}
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </div>
    <button
      type="button"
      onClick={submitHandler}
      disabled={loading}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
    >
      {loading ? "Loading..." : "Login"}
    </button>
    <button
      type="button"
      onClick={() => {
        setEmail("guest@example.com");
        setPassword("123456");
      }}
      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50"
    >
      Get Guest User Credentials
    </button>
  </div>
  )
};

export default Login;
