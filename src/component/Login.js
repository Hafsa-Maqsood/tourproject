import React, { useState, useContext } from 'react';
import '../styles/Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import LoginImage from '../assets/login.jpg';
import Footer from './Footer';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from './../utils/config';

const Login = () => {
    // State for managing form inputs
    const [credentials, setCredentials] = useState({
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
        if (!credentials.email || !credentials.password) {
            alert("All fields are required.");
            return;
        }

        console.log("Submitted credentials:", credentials); // Debug log for form data

        try {
            const res = await fetch(`${BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials:'include',
                body: JSON.stringify(credentials), // Send user data to the backend
            });

            const result = await res.json();

            console.log("Server Response:", result); // Debug log for server response

            if (!res.ok) {
                alert(result.message); // Display error message from the backend
            } else {
                // Dispatch successful login action
                dispatch({ type: 'LOGIN_SUCCESS', payload: result });

                // Redirect to home page after success
                navigate('/');
            }
        } catch (err) {
            console.error("Error during login:", err); // Log errors for debugging
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div>
            <div className="wrapper">
                {/* Left side image */}
                <div className="image-box">
                    <img src={LoginImage} alt="Login Illustration" />
                </div>

                {/* Right side form */}
                <div className="form-box">
                    <form onSubmit={handleClick}>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={credentials.email}
                                onChange={handleChange}
                                required
                            />
                            <FaUser className="icon" />
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

                        <button type="submit">Login</button>
                        <div className="register-link">
                            <p>Don't have an account? <a href="/register">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Login;
