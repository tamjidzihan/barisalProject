const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants');

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));



const currieerServiceSchema = new mongoose.Schema({
    type: { type: String, required: false },
    name: { type: String, required: false },
    address: { type: String, required: false },
    branch: { type: String, required: false },
    phone: { type: String, required: false }
});

const CurrieerService = mongoose.model('CurrieerService', currieerServiceSchema);


// Data to be inserted
const courierServices = [
    {
        type: 'Courier Service',
        name: 'AJR Courier Service',
        address: 'Nobagram Road (near Mission) Chowmatha, Barishal',
        phone: '01733-384869'
    },
    {
        type: 'Courier Service',
        name: 'E Courier',
        address: 'P952+3M5, C and B Rd, Barishal',
        phone: '01910-361701'
    },
    {
        type: 'Courier Service',
        name: 'Mettro Express',
        address: '938 C and B Rd, Barishal',
        phone: '01844-610394'
    },
    {
        type: 'Courier Service',
        name: 'Panda Courier Service Barishal Hub',
        address: 'P923+CG2, Barishal',
        phone: '01912-112770'
    },
    {
        type: 'Courier Service',
        name: 'Karatoa Courier Service',
        address: 'C and B Rd, Barishal, Bangladesh',
        phone: '01313-026540'
    },
    {
        type: 'Courier Service',
        name: 'Janani Express Parcel Service',
        address: 'Janani Express Parcel Service, Barishal',
        phone: '01871-042877'
    },
    {
        type: 'Courier Service',
        name: 'Sundarban Courier Service',
        branch: 'Barisal Branch',
        Address: ' Not explicitly listed, visit their website for details',
        phone: 'Various'
    },
    {
        type: 'Courier Service',
        name: 'SA Paribahan Courier Service',
        branch: 'Barishal Branch',
        address: '205 Sadar Road, Barishal',
        phone: '0431-218111, 01755512773'
    },
    {
        type: 'Courier Service',
        name: 'USB Express Courier Service',
        branch: 'Barishal Branch',
        address: 'C&B Road, Bhola-5200',
        phone: '01701208493'
    }
    // Add more courier services as needed
];

// Insert data into the database
CurrieerService.insertMany(courierServices)
    .then(() => {
        console.log('Courier services inserted');
        mongoose.connection.close();
    })
    .catch(err => console.error(err));
