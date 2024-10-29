import React from 'react';
import '../styles/register.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Register = () => {
    return (
        <div className="wrapper">
            <div className='form-box'>
                <form>
                    <h1>Create Account</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='email' placeholder='Email' required />
                        <FaEnvelope className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    <button type='submit'>Create Account</button>
                    <div className='register-link'>
                        <p>Already have an account? <a href='/login'>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
