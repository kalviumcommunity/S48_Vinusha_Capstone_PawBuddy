//Cat.jsx

import React from 'react';
import '../css/cat.css';
import contentcat2 from '../images/contentcat2.jpeg';
import contentcat3 from '../images/contentcat3.jpeg';
import contentcat4 from '../images/contentcat4.jpeg';
import Navbar from './NavBar2';
import { useNavigate } from 'react-router-dom';


const Cat = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/vet-services');
  };

  return (
    <div className="cat-container">
        <Navbar />
      <h1 className="cat-title">Cat Services</h1>
      <p className="cat-description">Explore the top-notch services we offer to ensure your feline friend stays healthy and happy</p>
      <div className="cat-content">
        <div className="cat-service">
          <img src={contentcat2} alt="Cat Food Safety" className="cat-service-image" />
          <h2>Cat Food Safety</h2>
          <p>Ensure your cat's food is safe and healthy.</p>
          <button className="cat-service-button">Learn More</button>
        </div>
        <hr className="cat-section-divider" />
        <div className="cat-service">
          <img src={contentcat3} alt="Cat Vaccination Deadlines" className="cat-service-image" />
          <h2>Cat Vaccination Deadlines</h2>
          <p>Track your cat's vaccination schedule easily.</p>
          <button className="cat-service-button">Learn More</button>
        </div>
        <hr className="dog-section-divider" />
        <div className="cat-service">
          <img src={contentcat4} alt="Cat Veterinary Services" className="cat-service-image" />
          <h2>Cat Veterinary Services</h2>
          <p>Meet with vets virtually for expert advice.</p>
          <button className="cat-service-button" onClick={handleLearnMoreClick}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Cat;
