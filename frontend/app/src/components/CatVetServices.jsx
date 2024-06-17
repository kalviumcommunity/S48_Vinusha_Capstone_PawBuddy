//CatVetServices.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/catvetservices.css';
import { useNavigate } from 'react-router-dom';
import profileImage from '../images/Profile1.jpeg';

const CatVetServices = () => {
    const [vets, setVets] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchVets = async () => {
            try {
                const response = await axios.get('http://localhost:3000/vet');
                if (response.data && Array.isArray(response.data)) {
                    setVets(response.data);
                } else {
                    console.error('Invalid veterinarian data format:', response.data);
                }
            } catch (error) {
                console.error('Error fetching veterinarian data:', error);
            }
        };
        
        fetchVets();
    }, []);

    const handleAddDetailsClick = () => {
        navigate('/add-vet');
    };

    return (
        <div className="cat-vet-services-container">
        <h1 className="cat-vet-services-title">Veterinarian Services</h1>
        <p className="vet-call-to-action">Are you a veterinarian? Share your expertise and help people with your valuable advice.</p>
        <button className="vet-add-details-button" onClick={handleAddDetailsClick}>Add Details</button>
        <div className="vet-cards-container">
            {vets.length === 0 ? (
                <p>No veterinarian data available</p>
            ) : (
                vets.map((vet) => (
                    <div className="vet-card" key={vet._id}>
                        <img
                            src={vet.image ? `http://localhost:3000/uploads/${vet.image}` : profileImage}
                            alt={vet.name}
                            className="vet-image"
                        />
                        
                        <div className="vet-details">
                            <h2 className="vet-name">{vet.name}</h2>
                            <p className="vet-detail"><strong>Gender:</strong> {vet.gender}</p>
                            <p className="vet-detail"><strong>Qualification:</strong> {vet.qualification}</p>
                            <p className="vet-detail"><strong>Specialisation:</strong> {vet.specialisation}</p>
                            <p className="consultation-fee">Consultation Fee: ${vet.consultation_fee}</p>
                            <p className="phone-number">Phone Number: {vet.phone_number}</p>
                            <button className="vet-button">Book an appointment</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    </div>
    );
};

export default CatVetServices;
