import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/logo (1).jpg';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext);
    const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
    const navigate = useNavigate();

    // Logout handler
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
    };

    // Check if the user object is valid and has the email
    const getProfileIcon = () => {
        if (user && user.email) {
            return user.email.charAt(0).toUpperCase();
        }
        return "U"; // Default fallback if no email
    };

    return (
        <nav className="navStyle">
            {/* Logo Section */}
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>

            {/* Navigation Links */}
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/Callabout">About</Link>
                <Link to="/Tour">Tour</Link>

                {/* User Profile Dropdown */}
                {user ? (
                    <div className="profile-container">
                        {/* Profile Icon */}
                        <div
                            className="profile-icon"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            {getProfileIcon()} {/* This will show the first character of the email */}
                        </div>

                        {/* Dropdown Menu */}
                        {showDropdown && (
                            <div className="dropdown-menu">
                                <p className="dropdown-item">{user.email}</p>
                                <button className="dropdown-item" onClick={handleLogout}>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
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
