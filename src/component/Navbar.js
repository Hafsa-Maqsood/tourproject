import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css'; // Adjust the path if App.css is in the src directory
import Logo from '../assets/logo (1).jpg';
import { AuthContext } from '../context/AuthContext'; // Import your AuthContext

const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext); // Access the auth context
    const navigate = useNavigate();

    // Logout functionality
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' }); // Clear user data from context
        navigate('/'); // Redirect to the homepage
    };

    return (
        <nav className='navStyle'>
            <div className='logo'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='nav-links'>
                <Link to="/">Home</Link>
                <Link to="/Callabout">About</Link>
                <Link to="/Tour">Tour</Link>
                {user ? (
                    <>
                        {/* Display user name if logged in */}
                        <span className="user-name">{user.username}</span> {/* Only the username */}
                        <button className="logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        {/* Show Login and Register buttons if logged out */}
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
