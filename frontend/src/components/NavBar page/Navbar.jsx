import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">shoping</h1>

        {/* Search Bar */}
        <div className="flex items-center bg-white text-black px-2 py-1 rounded-md w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-1 outline-none"
          />
          <button className="ml-2 bg-yellow-500 px-3 py-1 rounded-md">
            🔍
          </button>
        </div>

        
        <div className="flex space-x-6">
          <button className="hover:text-yellow-500" onClick={()=>navigate("/SignUp")}>Sign In</button>
          <button className="hover:text-yellow-500">Cart 🛒</button>
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-center mt-10 text-3xl">Welcome to eCommerce store</h1>
    </>
  );
}
