import React from 'react';
import '../css/login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here

    // Navigate to ChoosePet page upon successful login
    navigate('/choosepet');
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="signup-prompt">Don't have an account? <a href="/signup">Sign up</a></p>
    </div>
  );
}

export default Login;
