import React, { useState, useContext } from 'react';
import '../styles/Register.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import RegisterImage from '../assets/register.jpg';
import Footer from './Footer';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from './../utils/config';

const Register = () => {
    // State for managing form inputs
    const [credentials, setCredentials] = useState({
        username: '', // Changed to match the backend (username instead of userName)
        email: '',
        password: '',
    });

    // AuthContext for managing authentication state
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    // Handle input change dynamically
    const handleChange = (e) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    // Handle form submission
    const handleClick = async (e) => {
        e.preventDefault();

        // Frontend validation
        if (!credentials.username || !credentials.email || !credentials.password) {
            alert("All fields are required.");
            return;
        }

        console.log("Submitted credentials:", credentials); // Debug log for form data

        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials), // Send user data to the backend
            });

            const result = await res.json();

            console.log("Server Response:", result); // Debug log for server response

            if (!res.ok) {
                alert(result.message); // Display error message from the backend
            } else {
                // Dispatch successful registration action
                dispatch({ type: 'REGISTER_SUCCESS', payload: result });

                // Redirect to login page after success
                navigate('/login');
            }
        } catch (err) {
            console.error("Error during registration:", err); // Log errors for debugging
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div>
            <div className="wrapper">
                {/* Left side image */}
                <div className="image-box">
                    <img src={RegisterImage} alt="Register" />
                </div>

                {/* Right side form */}
                <div className="form-box">
                    <form onSubmit={handleClick}>
                        <h1>Create Account</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                name="username" // Updated to match backend field
                                placeholder="Username"
                                value={credentials.username}
                                onChange={handleChange}
                                required
                            />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={credentials.email}
                                onChange={handleChange}
                                required
                            />
                            <FaEnvelope className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={credentials.password}
                                onChange={handleChange}
                                required
                            />
                            <FaLock className="icon" />
                        </div>

                        <button type="submit">
                            Create Account
                        </button>
                        <div className="register-link">
                            <p>Already have an account? <a href="/login">Login</a></p>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Register;
