import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext, AuthContextProvider } from './context/AuthContext'; // Import the AuthContext and AuthContextProvider
import Home from './component/Home';
import Callabout from './component/Callabout';
import Navbar from './component/Navbar';
import Tour from './component/Tour';
import TourDetail from './component/TourDetail';
import Login from './component/Login';
import Register from './component/Register';
import Cart from './component/Cart';
import ForgotPassword from './component/ForgotPassword';
 
import './App.css';

export default function App() {
  // Access user from context

  return (
    <AuthContextProvider>
      <Router>
        <div className="App">
          <Navbar />

        

          <Routes>
            {/* Default route (root) redirects to login */}
            <Route path="/" element={<Navigate to="/login" />} />
            
            <Route path="/Login" element={<Login />} />
            <Route path="/Callabout" element={<Callabout />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/tours/:id" element={<TourDetail />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/ForgetPassword" element={<ForgotPassword />} />
          </Routes>
        </div>
      </Router>
    </AuthContextProvider>
  );
}