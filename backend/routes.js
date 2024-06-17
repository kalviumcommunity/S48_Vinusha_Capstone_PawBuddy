//routes.js

const multer = require('multer');
const express = require('express');
const router = express.Router();
const Veterinarian = require('./models/Veterinarian');
const cors = require('cors');
const path = require('path');

router.use(cors());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});


const upload = multer({ storage });

router.get('/vet', async (req, res) => {
    try {
        const vets = await Veterinarian.find();
        res.json(vets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Assuming you have a route handler that fetches and sends veterinarian data
router.get('/vet/:id', async (req, res) => {
    try {
        const vet = await Veterinarian.findById(req.params.id);
        if (!vet) {
            return res.status(404).json({ error: 'Veterinarian not found' });
        }
        // Construct the image URL assuming uploads is the folder containing images
        vet.image = `${req.protocol}://${req.get('host')}/uploads/${vet.image}`;
        res.json(vet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post('/vet', upload.single('image'), async (req, res) => {
    const { name, gender, qualification, specialisation, consultation_fee, phone_number } = req.body;
    const image = req.file ? req.file.filename : null; // Store the filename in the image field

    const newVet = new Veterinarian({
        name,
        gender,
        qualification,
        specialisation,
        consultation_fee,
        phone_number,
        image // Assign the filename to the image field in your MongoDB document
    });

    try {
        const savedVet = await newVet.save();
        res.status(201).json(savedVet);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
