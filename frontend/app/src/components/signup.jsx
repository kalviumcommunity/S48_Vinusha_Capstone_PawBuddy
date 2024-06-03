import React from 'react';
import '../css/signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form className="signup-form">
        
       <label htmlFor="name">Pet Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" required />

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <p className="login-prompt">Already have an account? <a href="/login">Log in</a></p>
    </div>
  );
}

export default Signup;
