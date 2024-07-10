const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants'); // Adjust the path if necessary

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const ambulanceServiceSchema = new mongoose.Schema({
    type: { type: String, required: false },
    name: { type: String, required: false },
    address: { type: String, required: false },
    phone: { type: Number, required: false }
});

const AmbulanceService = mongoose.model('AmbulanceService', ambulanceServiceSchema);

const ambulanceServices = [
    {
        name: 'Sher-e-Bangla Medical College Hospital Ambulance Service',
        address: 'Sher-e-Bangla Medical College Hospital, Band Road, Barishal',
        phone: +8801714120634
    },
    {
        name: 'Barishal Red Crescent Society Ambulance Service',
        address: 'Red Crescent Office, Sadar Road, Barishal',
        phone: +8804312171057
    },
    {
        name: 'Barishal City Corporation Ambulance Service',
        address: 'City Corporation Office, Sadar Road, Barishal',
        phone: +8804312171678
    },
    {
        name: 'Ambulance Service, Barishal General Hospital',
        address: 'Barishal General Hospital, Sadar Road, Barishal',
        phone: +8804312175044
    },
    {
        name: 'Islamic Hospital Ambulance Service',
        address: 'Islamic Hospital, Kawnia, Barishal',
        phone: +8801711654321
    },
    {
        name: 'Barishal Heart Foundation Ambulance Service',
        address: 'Heart Foundation Hospital, Bhatikhana Road, Barishal',
        phone: +8801713567890
    },
    {
        name: 'Barishal Nursing Institute and Hospital Ambulance Service',
        address: 'Barishal Nursing Institute and Hospital, Rupatali, Barishal',
        phone: +8801715678901
    },
    {
        name: 'Al-Amin Ambulance Service',
        address: 'Fakir Bari Road, Sagordi, Barishal',
        phone: +8801712345678
    }
];

AmbulanceService.insertMany(ambulanceServices)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
