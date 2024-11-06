import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Adjust the path if App.css is in the src directory
import Logo from '../assets/logo (1).jpg';

const Navbar = () => {
    return (
        <nav className='navStyle'>
            <div className='logo'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='nav-links'>
                <Link to="/">Home</Link>
                <Link to="/Callabout">About</Link>
                <Link to="/Tour">Tour</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Register">
                    <button className="register-button">Register</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
