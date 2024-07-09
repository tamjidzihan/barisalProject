const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/barisalProjectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const universitySchema = new mongoose.Schema({
    type: String,
    name: String,
    address: String,
    founded: Number,
    campus: String,
    students: Number,
});

const University = mongoose.model('University', universitySchema);

const universities = [
    {
        type: "Public",
        name: "University of Barisal",
        address: "Barishal 8254",
        founded: 2011,
        campus: "Suburban (50 acres)",
        students: 7539
    },
    {
        type: "Public",
        name: "Patuakhali Science & Technology University (PSTU)",
        address: "Dumki- Patuakhali Highway, 8602",
        campus: "109.97 acres (44.50 ha) (including Babugonj, 12.97 acres (5.25ha))",
        students: 3000
    },
    {
        type: "Public",
        name: "Barishal Engineering College",
        address: "PC39+394, Barishal-Bhola Hwy",
        campus: "Rural, 3.6 hectares (8.9 acres)",
        students: 120
    },
    {
        type: "Private",
        name: "Global University Bangladesh",
    },
    {
        type: "Private",
        name: "University of Global Village",
    },
    {
        type: "Private",
        name: "Trust University, Berishal",
    }
];

University.insertMany(universities)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch((error) => {
        console.error('Error inserting data: ', error);
    });
