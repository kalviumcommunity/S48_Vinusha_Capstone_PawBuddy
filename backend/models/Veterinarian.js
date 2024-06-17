const mongoose = require('mongoose');

const veterinarianSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    qualification: {
        type: String,
        required: true,
        trim: true
    },
    specialisation: {
        type: String,
        required: true,
        trim: true
    },
    consultation_fee: {
        type: Number,
        required: true,
        min: 0
    },
    phone_number: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: false // Optional
    }
}, {
    timestamps: true,
    collection: 'vet'
});

const Veterinarian = mongoose.model('Veterinarian', veterinarianSchema);

module.exports = Veterinarian;
