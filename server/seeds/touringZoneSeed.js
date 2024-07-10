const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants'); // Adjust the path if necessary

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const touringZoneSchema = new mongoose.Schema({
    type: { type: String, required: false },
    name: { type: String, required: false },
    address: { type: String, required: false },
    phone: { type: Number, required: false }
});

const TouringZone = mongoose.model('TouringZone', touringZoneSchema);

const touringZones = [
    {
        type: 'sea beach',
        name: 'Kuakata Sea Beach'
    },
    {
        type: 'Park',
        name: 'Muktijoddha Park',
        address: 'M9WF+5FV, Band Rd, Barishal 8200'
    },
    {
        type: 'Park',
        name: 'Planet Park',
        address: 'M9VC+754, Band Rd, Barishal 8200'
    },
    {
        type: 'Park',
        name: 'Bangabandhu Uddyan',
        address: 'Band Rd, Barishal'
    },
    {
        type: 'Park',
        name: 'Shadhinota Park',
        address: 'Shadhinota Park Trail, Barishal'
    },
    {
        type: 'Park',
        name: 'Bibir Pukur',
        address: 'Heron Square, Bibir pukur par, Barishal'
    },
    {
        type: 'Park',
        name: 'Green City Park TNI',
        address: 'M9V9+GF7, Bells Park Trail, Barishal'
    },
    {
        type: 'Park',
        name: '30 Godown',
        address: 'Barishal 8200'
    },
    {
        type: 'Park',
        name: 'Shahan Ara Begom Park',
        address: 'Chowmatha lake side, Dhaka - Barisal Highway, Barishal'
    },
    {
        type: 'Park',
        name: 'Nishorgo Park Barisal',
        phone: 1783613945
    },
    {
        type: 'Park',
        name: 'Durga Sagar',
        address: 'Durga Sagar, 8213 Swarupkathi - Barisal Rd, Madhabpasha 8213'
    },
    {
        type: 'Park',
        name: 'Shaheed Sukanto Babu Park',
        address: 'P96F+XP6, Khan Bari, Town School Road, Bhatikhana, Barishal'
    },
    {
        type: 'Park',
        name: 'Taltoli Bhangar Par',
        address: 'P9RP+WR, Barishal'
    },
    {
        type: 'Park',
        name: 'Bales Park Lotus Lake',
        address: 'Bangabandhu Uddyan'
    },
    {
        type: 'Park',
        name: 'Choumatha Park',
        address: 'P923+F67, Barishal'
    },
    {
        type: 'Park',
        name: 'Adams Park',
        address: 'M9QG+MVR'
    },
    {
        type: 'Park',
        name: 'Guthia Baitul Aman Jame Masjid',
        address: 'Swarupkathi - Barisal Rd'
    },
    {
        type: 'Park',
        name: 'Atghar Kuriana Guava Market',
        address: 'P5Q3+XW9, Atghar Kuriana Union'
    }
];

TouringZone.insertMany(touringZones)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
