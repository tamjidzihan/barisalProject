const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants'); // Adjust the path if necessary

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const hospitalSchema = new mongoose.Schema({
    type: { type: String, required: false },
    name: { type: String, required: false },
    address: { type: String, required: false },
    founded: { type: Number, required: false }
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

const hospitals = [
    { name: 'Sher-e-Bangla Medical College Hospital' },
    { name: 'Barishal General Hospital' },
    { name: 'K,M,C HOSPITAL' },
    { name: 'Ambia Memorial Hospital' },
    { name: 'Barishal Heart Foundation Hospital' },
    { name: 'Barishal Kidney Foundation Hospital' },
    { name: 'South Apollo Medical College & Hospital' },
    { name: 'Barishal City Hospital' },
    { name: 'Rahat Anwar Hospital' },
    { name: 'Islami Bank Hospital' },
    { name: 'Arif Memorial Hospital' },
    { name: 'Grameen GC Eye Hospital, Barishal' },
    { name: 'Popular Diagnostic Center Ltd, Barishal Branch' },
    { name: 'Momota Specialisted Hospital' },
    { name: 'Medinova medical services' },
    { name: 'Bengal hospital' },
    { name: 'LABAID Diagnostic Barishal' },
    { name: 'Eden Nursing Home' },
    { name: 'Red Crescent Hospital' },
    { name: 'Dr. Mokhlesur Rahman (Pvt) Hospital & Diagnostic Center' },
    { name: 'Fair Health Clinic' },
    { name: 'Razzak Memorial Clinic' },
    { name: 'Bengal Hospital & Diagnostic Center' },
    { name: 'Royal City Hospital' }
];

Hospital.insertMany(hospitals)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
