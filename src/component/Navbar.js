import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css'; // Adjust the path if App.css is in the src directory

const Navbar = () => {
    const currentLocation = useLocation();

    // Set Navbar style conditionally
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center', // This centers the items vertically
        height: '100px',
        backgroundImage: currentLocation.pathname === '/' ? 'url(/image.png)' : 'none', // Use forward slashes for the path
        fontSize: 'larger',
        fontWeight: 'bolder',
        
    };
    

    return (
        <nav style={navStyle}>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Tour">Tour</Link>
            <Link to="/LoginRegister">LoginRegister</Link>
        </nav>
    );
};

export default Navbar;
