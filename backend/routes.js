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

module.exports = router;
