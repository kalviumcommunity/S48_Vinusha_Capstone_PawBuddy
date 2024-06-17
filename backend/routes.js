//routes.js

const express = require('express');
const router = express.Router();
const Veterinarian = require('./models/Veterinarian');
const cors = require('cors');

router.use(cors());

//get vet
router.get('/vet', async (req, res) => {
    try {
        const vets = await Veterinarian.find();
        res.json(vets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/vet', async (req, res) => {
    const { name, gender, qualification, specialisation, consultation_fee, phone_number } = req.body;

    // Check if all required fields are provided
    if (!name || !gender || !qualification || !specialisation || !consultation_fee || !phone_number) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newVet = new Veterinarian({
            name,
            gender,
            qualification,
            specialisation,
            consultation_fee,
            phone_number
        });

        const savedVet = await newVet.save();
        res.status(201).json(savedVet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;
