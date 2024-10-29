import React from 'react';
import '../styles/Login.css'; // Make sure to create this CSS file
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
    return (
        <div className="wrapper">
            <div className='form-box'>
                <form>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type='email' placeholder='Email' required />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    <button type='submit'>Login</button>
                    <div className='register-link'>
                        <p>Don't have an account? <a href='/register'>Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
