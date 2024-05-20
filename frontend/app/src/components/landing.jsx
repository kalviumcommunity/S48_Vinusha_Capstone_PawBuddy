import React from 'react';
import '../css/landing.css';
import mainImage from '../images/mainimg.jpeg'; // Updated main image path
import foodImage from '../images/foodcat.jpeg'; // Updated food image path
import vetImage from '../images/dog1.jpeg'; // Updated vet image path
import vaccinationImage from '../images/dog2.jpeg'; // Updated vaccination image path

const LandingPage = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="website-name">PawBuddy</div>
        <ul className="nav-links">
          <li><a href="#home" className="nav-link">HOME</a></li>
          <li><a href="#about" className="nav-link">ABOUT US</a></li>
          <li><a href="#catalog" className="nav-link">CATALOG</a></li>
          <li><a href="#login" className="nav-link login-button">LOGIN</a></li>
        </ul>
      </nav>
      <div className="main-content">
        <div className="main-image-container">
          <img src={mainImage} alt="Main" className="main-image" />
          <div className="quote-container">
            <p className="quote-text">Keep your furry friend happy and healthy</p>
          </div>
        </div>
        <div className="sub-images-container">
          <div className="sub-image">
            <img src={foodImage} alt="Food" className="sub-img" />
            <div className="sub-image-text">FOOD</div>
          </div>
          <div className="sub-image">
            <img src={vetImage} alt="Vet" className="sub-img" />
            <div className="sub-image-text">VET</div>
          </div>
          <div className="sub-image">
            <img src={vaccinationImage} alt="Vaccination" className="sub-img" />
            <div className="sub-image-text">VACCINATION</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
