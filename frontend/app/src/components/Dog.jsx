import React from 'react';
import Navbar from './NavBar2';
import '../css/dog.css';
import contentDog1 from '../images/contentdog3.jpeg';
import contentDog2 from '../images/contentdog2.jpeg';
import contentDog3 from '../images/contentdog1.jpeg';
import { useNavigate } from 'react-router-dom';

const Dog = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/vet-services');
  };
    return (
        <div className="dog-container">
          <Navbar /> 
          <div className="intro-section">
            <h1 className="dog-title">Welcome to the Dog Section</h1>
            <p className="dog-description">Discover a world of services tailored for your beloved dog. From food safety to veterinary services, we've got you covered!</p>
          </div>
          <div className="dog-content">
            <div className="dog-service">
              <img src={contentDog1} alt="Dog Food Safety" className="dog-service-image" />
              <h2>Dog Food Safety</h2>
              <p>Check whether the food you give is safe or not. We provide detailed information about safe and unsafe dog foods.</p>
              <button className="dog-service-button">Learn More</button>
            </div>
            <hr className="dog-section-divider" /> 
            <div className="dog-service">
              <img src={contentDog2} alt="Vaccination Deadlines" className="dog-service-image" />
              <h2>Vaccination Deadlines</h2>
              <p>Stay up-to-date with your dog's vaccinations. Get details about necessary vaccinations and their schedules.</p>
              <button className="dog-service-button">Learn More</button>
            </div>
            <hr className="dog-section-divider" /> 
            <div className="dog-service">
              <img src={contentDog3} alt="Veterinary Services" className="dog-service-image" />
              <h2>Veterinary Services</h2>
              <p>Meet your vet virtually! Schedule online consultations with our expert veterinarians.</p>
              <button className="dog-service-button" onClick={handleLearnMoreClick}>Learn More</button>
            </div>
          </div>
        </div>
      );
    }
    
    export default Dog;
