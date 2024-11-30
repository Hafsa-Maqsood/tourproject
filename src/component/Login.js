import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
      if (!res.ok) throw new Error(data.message);

      dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="image-section">
          <img
            src="uploaded_image.png"
            alt="Illustration"
          />
        </div>
        <div className="form-section">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <a href="/register">Create</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
