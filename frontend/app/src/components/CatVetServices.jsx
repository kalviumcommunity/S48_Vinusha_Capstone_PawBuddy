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
        <div>
            <h1>Veterinarian Services</h1>
            <div className="vet-container">
                {vets.length === 0 ? (
                    <p className="no-data">No veterinarian data available</p>
                ) : (
                    vets.map((vet) => (
                        <div className="vet-card" key={vet._id}>
                            <h2>{vet.name}</h2>
                            <p><span>Gender:</span> {vet.gender}</p>
                            <p><span>Qualification:</span> {vet.qualification}</p>
                            <p><span>Specialisation:</span> {vet.specialisation}</p>
                            <p className="fee">Consultation Fee: ${vet.consultation_fee}</p>
                            <p><span>Phone Number:</span> {vet.phone_number}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CatVetServices;
