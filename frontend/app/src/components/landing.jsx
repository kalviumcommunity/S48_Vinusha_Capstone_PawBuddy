import { useState } from 'react';
import React from 'react';
import '../css/landing.css';
import mainImage from '../images/mainimg.jpeg'; // Updated main image path
import foodImage from '../images/foodcat.jpeg'; // Updated food image path
import vetImage from '../images/dog1.jpeg'; // Updated vet image path
import vaccinationImage from '../images/dog2.jpeg'; // Updated vaccination image path
import { Link, useNavigate} from 'react-router-dom';
import Navbar from './NavBar';

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleImageClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="landing-container">
      <Navbar/>
      <div className="main-content">
      <div className="main-image-container">
          <img src={mainImage} alt="Main" className="main-image" />
          <div className="quote-container">
            <p className="quote-text">Keep your furry friend happy and healthy</p>
            <Link to="/signup" className="get-started-link" onClick={handleGetStarted}>
            <button className="get-started-button">Get Started</button>
          </Link>
          </div>
        </div>
        <div className="sub-images-container">
          <div className="sub-image" onClick={handleImageClick}>
            <div className="sub-image-text">FOOD</div>
            <img src={foodImage} alt="Food" className="sub-img" />
          </div>
          <div className="sub-image" onClick={handleImageClick}>
            <div className="sub-image-text">VET</div>
            <img src={vetImage} alt="Vet" className="sub-img" />
          </div>
          <div className="sub-image" onClick={handleImageClick}>
            <div className="sub-image-text">VACCINATION</div>
            <img src={vaccinationImage} alt="Vaccination" className="sub-img" />
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Please log in to proceed. <br /> <br />To discover more about our services, click on 'Catalog'.</p>
            <button className="close-popup-button" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;