import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/logo (1).jpg'; 
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);  // Destructure user from context
  const navigate = useNavigate();

  console.log("Current User in Navbar:", user); // Debugging to check the user state

  return (
    <nav className="navStyle">
      {/* Logo Section */}
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/Home">Home</Link>
        <Link to="/Callabout">About</Link>
        <Link to="/Tour">Tour</Link>

        {/* My Ticket Link (Visible when user is logged in) */}
        {user ? (
          <Link to="/Cart" className="my-ticket-link">
            My Ticket
          </Link>
        ) : (
          <>
            {/* Login/Register Links */}
            <Link to="/Login">Login</Link>
            <Link to="/Register">
              <button className="register-button">Register</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
