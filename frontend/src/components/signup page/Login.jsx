import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
     
        <h2 className="text-center text-2xl font-semibold text-gray-900 mb-4">Log In</h2>

     
        <form onSubmit={handleSubmit} className="space-y-4">
       
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500"
            />
          </div>

      
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500"
            />
          </div>

    
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-2 rounded-md hover:bg-yellow-600"
          >
            Login
          </button>
        </form>

  
        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/forgetpassword")}
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm">New to Store?</p>
          <button
            onClick={() => navigate("/signup")}
            className="mt-2 w-full border border-gray-400 text-gray-700 font-bold py-2 rounded-md hover:bg-gray-200"
          >
            Create your  account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
