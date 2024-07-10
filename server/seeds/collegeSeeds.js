const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants')

// Replace 'your_database_uri' with your actual MongoDB URI
const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const collegeSchema = new mongoose.Schema({
    type: { type: String, required: false },
    name: { type: String, required: false },
    address: { type: String, required: false },
    founded: { type: Number, required: false },
    campus: { type: String, required: false },
    students: { type: Number, required: false }
});

const College = mongoose.model('College', collegeSchema);

const colleges = [
    { type: 'General', name: 'Brojomohun College' },
    { type: 'General', name: 'Govt. Fazlul Huq College, Chakhar' },
    { type: 'General', name: 'Government Syed Hatem Ali College' },
    { type: 'General', name: 'Amrita Lal Dey College' },
    { type: 'General', name: 'Barisal Government Women\'s College' },
    { type: 'General', name: 'Government Barisal College' },
    { type: 'General', name: 'Begum Tofazzal Hossain Manik Mia Mohila College' },
    { type: 'General', name: 'Barisal Islamia College' },
    { type: 'General', name: 'Barisal Law College' },
    { type: 'General', name: 'Rupatoli Jagua College' },
    { type: 'Medical', name: 'Sher-e-Bangla Medical College' },
    { type: 'Medical', name: 'Sher-e-Bangla Medical College Dental Unit' },
    { type: 'Medical', name: 'Apex Homeopathic Medical College' },
    { type: 'Medical', name: 'Barisal Nursing College' },
    { type: 'Medical', name: 'Institute of Health Technology, Barisal' },
    { type: 'Engineering', name: 'Shaheed Abdur Rab Serniabat Textile Engineering College' },
    { type: 'Engineering', name: 'Barisal Engineering College' },
    { type: 'Engineering', name: 'Shaheed Abdur Rab Serniabat Textile Institute, Gournadi' },
    { type: 'Polytechnic', name: 'Barisal Polytechnic Institute' },
    { type: 'Polytechnic', name: 'Infra Polytechnic Institute' },
    { type: 'Polytechnic', name: 'Barishal Information Technology College' },
    { type: 'Polytechnic', name: 'Ideal Polytechnic Institute' },
    { type: 'Polytechnic', name: 'United Polytechnic Institute' },
    { type: 'Training', name: 'Shaheed Abdur Rob Serniabat Teacher Training College' },
    { type: 'Training', name: 'Higher Secondary Teacher Training Institute' },
    { type: 'Training', name: 'Sagardi Primary Teacher Training Institute' },
    { type: 'Training', name: 'Agriculture Training Institute, Rahmatpur' },
    { type: 'Research', name: 'Bangladesh Rice Research Institution, Barisal' },
    { type: 'Research', name: 'Bangladesh Agricultural Research Institution, Barisal' },
    { type: 'Higher Secondary', name: 'Brojomohun College' },
    { type: 'Higher Secondary', name: 'Barisal Government Women\'s College' },
    { type: 'Higher Secondary', name: 'Government Syed Hatem Ali College' },
    { type: 'Higher Secondary', name: 'Barisal Cadet College' },
    { type: 'Higher Secondary', name: 'Government Barisal College' },
    { type: 'Higher Secondary', name: 'Amrita Lal Dey College' },
    { type: 'Higher Secondary', name: 'Barishal Government Model School And College' },
    { type: 'Higher Secondary', name: 'Alekanda Government College' },
    { type: 'Higher Secondary', name: 'Shahid Abdur Rab Serniabat College, Kawnia' },
    { type: 'Higher Secondary', name: 'Jagadish Saraswat Girls School & College' },
    { type: 'Higher Secondary', name: 'A Karim Ideal College, Palashpur' },
    { type: 'Higher Secondary', name: 'Barisal Metropolitan College' },
    { type: 'Higher Secondary', name: 'Barisal City College (Day & Night)' },
    { type: 'Higher Secondary', name: 'Royal Central College' },
    { type: 'Higher Secondary', name: 'Rupatoli Jagua College' },
    { type: 'Higher Secondary', name: 'Kashipur High School and College' },
    { type: 'Higher Secondary', name: 'Kashipur Girls High School and College' },
    { type: 'Higher Secondary', name: 'Mahanagar Day & Night College' },
    { type: 'Higher Secondary', name: 'Jahanara Israil School & College (English version)' }
];

College.insertMany(colleges)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
