import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/catvetservices.css';

const CatVetServices = () => {
    const [vets, setVets] = useState([]);

    useEffect(() => {
        const fetchVets = async () => {
            try {
                const response = await axios.get('http://localhost:3000/vet'); // Adjust the URL if necessary
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

    return (
<div className="cat-vet-services-container">
            <h1 className="cat-vet-services-title">Veterinarian Services</h1>
            <div className="vet-cards-container">
                {vets.length === 0 ? (
                    <p>No veterinarian data available</p>
                ) : (
                    vets.map((vet) => (
                        <div className="vet-card" key={vet._id}>
                            <img src={`https://api.adorable.io/avatars/285/${vet._id}.png`} alt={vet.name} className="vet-image" />
                            <div className="vet-details">
                                <h2 className="vet-name">{vet.name}</h2>
                                <p className="vet-detail"><strong>Gender:</strong> {vet.gender}</p>
                                <p className="vet-detail"><strong>Qualification:</strong> {vet.qualification}</p>
                                <p className="vet-detail"><strong>Specialisation:</strong> {vet.specialisation}</p>
                                <p className="consultation-fee">Consultation Fee: ${vet.consultation_fee}</p>
                                <p className="phone-number">Phone Number: {vet.phone_number}</p>
                                <button className="vet-button">More Details</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CatVetServices;
