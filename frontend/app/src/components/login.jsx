import React from 'react';
import '../css/login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form">
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
