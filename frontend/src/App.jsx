import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar page/Navbar.jsx";
import UserSignUp from "./components/signup page/UserSignUp.jsx"; 
import Login from "./components/signup page/Login.jsx";
import ForgetPassword from "./components/signup page/Forgate_password.jsx";

import UpdatePassword from "./components/signup page/Update_password.jsx";

import SupplierSignUp from "./components/signup page/Supplier.jsx";


import UserView from "./components/Product page/UserView.jsx";


import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar is always visible */}

      <Routes>
        <Route path="/"  /> 
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/login"   element={<Login/>}/>
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/UpdatePassword" element={<UpdatePassword />} />
       
        <Route path="/Supplier" element={<SupplierSignUp />} />

        <Route path="/UserView" element={<UserView />} />


      </Routes>
    </Router>
  );
}

export default App;
