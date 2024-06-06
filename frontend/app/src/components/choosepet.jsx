import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/choosepet.css';
import dogImage from '../images/choosedog.jpeg'; // Adjust the path as needed
import catImage from '../images/choosecat1.jpeg'; // Adjust the path as needed

const ChoosePet = () => {
  const navigate = useNavigate();

  const handleDogClick = () => {
    navigate('/dog');
  };

  const handleCatClick = () => {
    navigate('/cat');
  };

  return (
    <div className="choose-pet-container">
      <h2 className="choose-pet-title">Discover Your Perfect Companion</h2>
      <div className="pet-options">
        <div className="pet-option" onClick={handleDogClick}>
          <img src={dogImage} alt="Dog" className="pet-image" />
          <p className="pet-name">Loyal Canine</p>
          <button className="pet-button">Choose Dog</button>
        </div>
        <div className="pet-option" onClick={handleCatClick}>
          <img src={catImage} alt="Cat" className="pet-image" />
          <p className="pet-name">Elegant Feline</p>
          <button className="pet-button">Choose Cat</button>
        </div>
      </div>
    </div>
  );
}

export default ChoosePet;
