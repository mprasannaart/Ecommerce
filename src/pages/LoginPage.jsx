// src/components/LoginPage.jsx
import React, { useState } from 'react';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('email');

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-center text-gray-800 text-lg font-medium mb-2">Login/Signup</h1>
        <h2 className="text-center text-black text-2xl font-bold mb-6">Welcome to EXTREME CULTURE</h2>
        
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setActiveTab('email')}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'email' ? 'bg-black text-white' : 'bg-white text-black'
            } border border-black rounded-l-md focus:outline-none`}
          >
            E-mail
          </button>
          <button
            onClick={() => setActiveTab('phone')}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'phone' ? 'bg-black text-white' : 'bg-white text-black'
            } border border-black border-l-0 rounded-r-md focus:outline-none`}
          >
            Phone no
          </button>
        </div>
        
        <div className="mb-4">
          <input
            type={activeTab === 'email' ? 'email' : 'tel'}
            placeholder={activeTab === 'email' ? 'Enter your E-mail' : 'Enter your Phone no'}
            className="w-full px-4 py-3 bg-gray-200 text-gray-700 placeholder-gray-500 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        
        <button className="w-full px-4 py-3 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-black mb-4">
          Continue
        </button>
        
        <div className="flex items-center justify-center">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-sm text-gray-800">
            Agree to Terms & Condition and Privacy Policy
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;