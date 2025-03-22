import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const UserSignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      axios.post('http://localhost:3000/ecom/signup', formData)
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
    }
    catch (err) {
      console.log
    } 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Create account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium">Your name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="First and last name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="At least 6 characters"
            />
            <p className="text-xs text-gray-500 mt-1">Passwords must be at least 6 characters.</p>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium">Mobile number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your phone number"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition duration-200"
          >
            Sign up
          </button>
        </form>

        {/* Supplier Sign-Up Button */}
        <button
          onClick={() => navigate("/supplier")}
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Sign up as Supplier
        </button>

        {/* Sign-in Link */}
        <p className="text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
