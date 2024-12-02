import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import RegisterImage from '../assets/register.jpg';
import Footer from './Footer';

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            alert('Account created successfully!');
            navigate('/login');
        } catch (error) {
            console.error('Registration error:', error);
            alert(error.message);
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
                    <form onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formData.username}
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
                                value={formData.email}
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
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <FaLock className="icon" />
                        </div>

                        <button type="submit">Create Account</button>
                        <div className="register-link">
                            <p>Already have an account? <a href="/login">Login</a></p>
                        </div>
                    </form>
                </div>
            </div>

            <div><Footer /></div>
        </div>
    );
};

export default Register;
