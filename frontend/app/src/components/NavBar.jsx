import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="website-name">PawBuddy</div>
      <ul className="nav-links">
        <li><a href="#home" className="nav-link">HOME</a></li>
        <li><a href="#about" className="nav-link">ABOUT US</a></li>
        <li><a href="#catalog" className="nav-link">CATALOG</a></li>
        <li><Link to="/login" className="nav-link login-button">LOGIN</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
