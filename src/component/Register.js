import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
  const [credentials, setCredentials] = useState({ username: '', email: '', password: '' });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      dispatch({ type: 'REGISTER_SUCCESS' });
      alert('Account created successfully!');
      navigate('/login');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="image-section">
          <img src="uploaded_image.png" alt="Illustration" />
        </div>
        <div className="form-section">
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
