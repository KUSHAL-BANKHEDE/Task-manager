import React, { useState } from 'react';
import Login from '../component/login';
import Signup from '../component/signup';

function HomePage() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  const showLogin = () => {
    setIsLoginVisible(true);
  };

  const showSignup = () => {
    setIsLoginVisible(false);
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex justify-center p-3 w-full mb-5 rounded-lg bg-white">
        <h1 className="text-4xl font-bold">
          User Authentication
        </h1>
      </div>
      <div className="w-full p-4 rounded-lg bg-white">
        <div className="w-full flex justify-center mb-1em">
          <div className="border-b border-gray-300">
            <button 
              className={`px-4 py-2 font-semibold text-gray-700 border-b-2 ${isLoginVisible ? 'border-blue-500' : 'border-transparent'} focus:outline-none focus:border-blue-500`}
              onClick={showLogin}
            >
              Login
            </button>
          </div>
          <div className="border-b border-gray-300 ml-4">
            <button 
              className={`px-4 py-2 font-semibold text-gray-700 border-b-2 ${isLoginVisible ? 'border-transparent' : 'border-blue-500'} focus:outline-none focus:border-blue-500`}
              onClick={showSignup}
            >
              Sign Up
            </button>
          </div>
        </div>
        <div>
          {isLoginVisible ? (
            <div className="mt-4">
              <Login />
            </div>
          ) : (
            <div className="mt-4">
              <Signup />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
