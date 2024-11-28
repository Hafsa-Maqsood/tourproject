import React from 'react';
import '../styles/Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import LoginImage from '../assets/login.jpg';
import Footer from './Footer';
const Login = () => {
    return (
        <div>
        <div className="wrapper">
            <div className="content-container">
                <div className="form-box">
                    <form>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="email" placeholder="Email" required />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                            <FaLock className="icon" />
                        </div>
                        <button type="submit">Login</button>
                        <div className="register-link">
                            <p>Don't have an account? <a href="/register">Register</a></p>
                        </div>
                    </form>
                </div>
                <div className="image-box">
                    <img src={LoginImage} alt="Login Illustration" />
                </div>
            </div>
        
        </div>
         <div> <Footer/></div>
         </div>
    );
};

export default Login;
