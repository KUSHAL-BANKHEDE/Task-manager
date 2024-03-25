import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [picLoading, setPicLoading] = useState(false);

  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    setPicLoading(true);

    // Check if any field is empty
    if (!name || !email || !password || !confirmPassword) {
      setPicLoading(false);
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match");
      setPicLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/signup",
        {
          name,
          email,
          password,
        },
        config
      );

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setPicLoading(false);
    } catch (error) {
      console.error("Error occurred:", error);
      setPicLoading(false);
    }
  };

  return (
    <div>
      <div className="space-y-5">
        <div className="flex flex-col">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email Address"
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              id="password"
              type={show ? "text" : "password"}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
              <button
                type="button"
                className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={handleClick}
              >
                {show ? "Hide" : "Show"}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <button
          type="button"
          onClick={submitHandler}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;
