import React, { useState, useContext } from 'react';  // Import useContext here
import { AuthContext } from "../context/AuthContext";
import { FaUser, FaLock } from "react-icons/fa";
import LoginImage from '../assets/login.jpg';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import Footer from './Footer';
import '../styles/Login.css';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();  // Hook for navigation
    const { dispatch } = useContext(AuthContext);  // Now this will work
    const handleChange = (e) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/api/v1/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message);
            }

            // If login is successful, navigate to the homepage
            navigate("/");  // Redirect to home page
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div>
            <div className="wrapper">
                <div className="content-container">
                    <div className="form-box">
                        <form onSubmit={handleSubmit}>
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
                        <p>
                        <span onClick={() => navigate("/ForgetPassword")} className="forgot-password">
                            Forgot Password?
                        </span>
                    </p>
                    </div>
                    
                    <div className="image-box">
                        <img src={LoginImage} alt="Login Illustration" />
                    </div>
                </div>
            </div>
            <div><Footer /></div>
        </div>
    );
};

export default Login;
