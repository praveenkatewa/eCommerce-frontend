import React, { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      console.log("Passwords match. Proceed with password reset.", newPassword);
    } else {
      console.log("Passwords do not match.");
    }
  };

  const getOTP = () => {
    console.log("OTP sent to:", email);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Reset Password</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-gray-700 font-medium">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="At least 6 characters"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Re-enter new password"
            />
          </div>

          {/* OTP */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-2/3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="button"
              onClick={getOTP}
              className="w-1/3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
              Get OTP
            </button>
          </div>

          {/* Reset Password Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
          >
            Reset Password
          </button>
        </form>

        {/* Sign-in Link */}
        <p className="text-sm text-gray-600 mt-4 text-center">
          Remember your password?{" "}
          <a href="/login" className="text-yellow-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
