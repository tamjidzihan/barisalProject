const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants')

// Replace 'your_database_uri' with your actual MongoDB URI
const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const universitySchema = new mongoose.Schema({
    type: { type: String, required: false },
    name: { type: String, required: false },
    address: { type: String, required: false },
    founded: { type: Number, required: false },
    campus: { type: String, required: false },
    students: { type: Number, required: false }
});

const University = mongoose.model('University', universitySchema);

const universities = [
    {
        type: 'Public',
        name: 'University of Barisal',
        address: 'Barishal 8254',
        founded: 2011,
        campus: 'Suburban (50 acres)',
        students: 7539
    },
    {
        type: 'Public',
        name: 'Patuakhali Science & Technology University (PSTU)',
        address: 'Dumki- Patuakhali Highway, 8602',
        campus: '109.97 acres (44.50 ha) (including Babugonj, 12.97 acres (5.25ha))',
        students: 3000
    },
    {
        type: 'Public',
        name: 'Barishal Engineering College',
        address: 'PC39+394, Barishal-Bhola Hwy',
        campus: 'Rural, 3.6 hectares (8.9 acres)',
        students: 120 // Assuming this is the total number of students enrolled
    },
    {
        type: 'Private',
        name: 'Global University Bangladesh',
        address: '',
        founded: null,
        campus: '',
        students: null
    },
    {
        type: 'Private',
        name: 'University of Global Village',
        address: '',
        founded: null,
        campus: '',
        students: null
    },
    {
        type: 'Private',
        name: 'Trust University, Berishal',
        address: '',
        founded: null,
        campus: '',
        students: null
    }
];

University.insertMany(universities)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
