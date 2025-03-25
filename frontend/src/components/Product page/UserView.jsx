import React from "react";
import { useNavigate } from "react-router-dom";

const UserView = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">User View</h1>
      <button
        onClick={() => navigate("/updatepassword")}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Update Password
      </button>
    </div>
  );
};

export default UserView;
