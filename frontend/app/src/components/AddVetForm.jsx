// AddVetForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../css/addvetform.css';
import { useNavigate } from 'react-router-dom';

const AddVetForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        qualification: '',
        specialisation: '',
        consultation_fee: '',
        phone_number: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/vet', formData);
            console.log('Form submitted successfully:', response.data);
            navigate('/cat-vet-services'); // Navigate back to vet services page
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="add-vet-form-container">
            <h1 className="add-vet-form-title">Add Veterinarian Details</h1>
            <form className="add-vet-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Qualification:</label>
                    <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Specialisation:</label>
                    <input type="text" name="specialisation" value={formData.specialisation} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Consultation Fee:</label>
                    <input type="number" name="consultation_fee" value={formData.consultation_fee} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default AddVetForm;
