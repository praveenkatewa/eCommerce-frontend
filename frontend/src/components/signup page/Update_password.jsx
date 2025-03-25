import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }

    try {
      const response = await axios.put(
        "http://localhost:3000/ecom/updatepassword",
        { newPassword, currentPassword },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      console.error("Error updating password:", error);
      console.log("token",localStorage.getItem("token"))
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Update Password
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Current Password */}
          <div>
            <label className="block text-gray-700 font-medium">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter current password"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-gray-700 font-medium">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter new password"
            />
          </div>

          {/* Confirm New Password */}
          <div>
            <label className="block text-gray-700 font-medium">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Re-enter new password"
            />
          </div>

          {/* Update Password Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
          >
            Update Password
          </button>
        </form>

        {/* Back to Sign-in */}
        <p className="text-sm text-gray-600 mt-4 text-center">
          Changed your mind?{" "}
          <a href="/login" className="text-yellow-600 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default UpdatePassword;
