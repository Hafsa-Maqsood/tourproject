import React from 'react';
import {Text} from 'react'
import { Link} from 'react-router-dom';
import '../styles/Navbar.css'; // Adjust the path if App.css is in the src directory


const Navbar = () => {
    return (
      
        <nav className='navStyle'>
            
          <div  className='logoHome'></div>
            <Link to="/" >Home</Link>
            <Link to="/Callabout">About</Link>
            <Link to="/Tour">Tour</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
           
             
            
        </nav>
    );
};

export default Navbar;
