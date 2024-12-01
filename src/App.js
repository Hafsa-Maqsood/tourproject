import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext, AuthContextProvider } from './context/AuthContext'; // Import the AuthContext and AuthContextProvider
import Home from './component/Home';
import Callabout from './component/Callabout';
import Navbar from './component/Navbar';
import Tour from './component/Tour';
import TourDetail from './component/TourDetail';
import Login from './component/Login';
import Register from './component/Register';
import Thankyou from './component/Thankyou';
import Cart from './component/Cart';
import ForgotPassword from './component/ForgotPassword';
import ProfileIcon from './component/ProfileIcon'; // Import ProfileIcon

import './App.css';

export default function App() {
  const { user } = useContext(AuthContext); // Access user from context

  return (
    <AuthContextProvider>
      <Router>
        <div className='App'>
          <Navbar />

          {/* Show ProfileIcon only if user is logged in */}
          {user && <ProfileIcon userEmail={user.email} />}
        

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Callabout' element={<Callabout />} />
            <Route path='/tour' element={<Tour />} />
            <Route path='/tours/:id' element={<TourDetail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/thank-you' element={<Thankyou />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/ForgetPassword' element={<ForgotPassword />} />
          </Routes>
        </div>
      </Router>
    </AuthContextProvider>
  );
}
