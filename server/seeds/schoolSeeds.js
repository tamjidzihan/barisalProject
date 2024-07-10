const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants'); // Adjust the path if necessary

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const schoolSchema = new mongoose.Schema({
    type: { type: String, required: false },
    name: { type: String, required: false },
    address: { type: String, required: false },
    founded: { type: Number, required: false },
    campus: { type: String, required: false },
    students: { type: Number, required: false }
});

const School = mongoose.model('School', schoolSchema);

const schools = [
    { type: 'High', name: 'Agailjhara Bhegai Halder Public Academy' },
    { type: 'High', name: 'A Wahed Secondary Girls School' },
    { type: 'High', name: 'A.B.R. High School' },
    { type: 'High', name: 'A.R.S. Secondary Girls\' School' },
    { type: 'High', name: 'Alekanda Girls\' High School' },
    { type: 'High', name: 'Asmat Ali Khan (A.K.) Institution' },
    { type: 'High', name: 'Baptist Mission Boys\' High School' },
    { type: 'High', name: 'Baptist Mission Girls\' High School' },
    { type: 'High', name: 'Barisal Government Girls High School' },
    { type: 'High', name: 'Barisal Residential School and College, Rupatoli' },
    { type: 'High', name: 'Barishal Government Model School and College' },
    { type: 'High', name: 'Barishal International School' },
    { type: 'High', name: 'Barishal Zilla School' },
    { type: 'High', name: 'Brojomohun School' },
    { type: 'High', name: 'Collegiate Secondary School' },
    { type: 'High', name: 'Fazlul Huq Residential School and College' },
    { type: 'High', name: 'Halima Khatun Girls\' Secondary School' },
    { type: 'High', name: 'Jagadish Saraswat Girls School & College' },
    { type: 'High', name: 'Jahanara Israil School & College (English version)' },
    { type: 'High', name: 'Kashipur Girls\' High School and College' },
    { type: 'High', name: 'Kashipur High School and College' },
    { type: 'High', name: 'Kaunia Girls\' High School' },
    { type: 'High', name: 'Mamtaz Majidunnesa Girls Secondary School' },
    { type: 'High', name: 'Mathuranath Public School' },
    { type: 'High', name: 'Oxford Mission High School' },
    { type: 'High', name: 'Royal Central School and College' },
    { type: 'High', name: 'S.C.G.M. Secondary School (Chaitanya School)' },
    { type: 'High', name: 'Sabera Khatun Girls\' Secondary School' },
    { type: 'High', name: 'Shahid Abdur Rab Serniabat Government High School' },
    { type: 'High', name: 'Shahid Altaf Smrity Secondary Girls School' },
    { type: 'High', name: 'Shahid Arjumoni Government High School' },
    { type: 'High', name: 'Sher-e-Bangla Girls Secondary School' },
    { type: 'High', name: 'Town High School' },
    { type: 'High', name: 'Udayan Secondary School' },
    { type: 'High', name: 'Nuria Secondary High School' },
    { type: 'English Medium', name: 'Jahanara Israil School & College (English Version)' },
    { type: 'English Medium', name: 'Adventist International Mission School (English Version)' },
    { type: 'Religious', name: 'Charmonai Madrasah' },
    { type: 'Religious', name: 'Jamia Islamia Mahmudia' },
    { type: 'Religious', name: 'Jamia Islamia Hosainia Madrasah' },
    { type: 'Religious', name: 'Lutfur Rahman Cadet Madrasah' },
    { type: 'Religious', name: 'Sagardi Kamil Madrasah' },
    { type: 'Technical', name: 'Technical Training Center (T.T.C.), Barisal' },
    { type: 'Technical', name: 'Barisal Mohila Technical Training Center' },
    { type: 'Technical', name: 'Barisal Govt. Technical School & College' },
    { type: 'Technical', name: 'UCEP Training School' },
    { type: 'Technical', name: 'Trust College of Skill Development' },
    { type: 'Technical', name: 'Youth Development Academy' },
    { type: 'Technical', name: 'Govt. Physical Education College, Barisal' },
    { type: 'Technical', name: 'Bilkis Jahan Technical School & BM College' },
    { type: 'Drama', name: 'Kheyali Group Theater' },
    { type: 'Drama', name: 'Shabdaboli Group Theater' },
    { type: 'Drama', name: 'Barisal Natok' },
    { type: 'Drama', name: 'Barisal Theatre' },
    { type: 'Drama', name: 'Ponchosiri Group Theatre' },
    { type: 'Drama', name: 'Natyam Barisal' },
    { type: 'Drama', name: 'Kirtonkhola Group Theatre' },
    { type: 'Drama', name: 'Brojomohon Theatre' },
    { type: 'Drama', name: 'Barisal Shilpomoncho' },
    { type: 'Art', name: 'Barisal Charukola School' },
    { type: 'Art', name: 'Barisal Shishu Academy' },
    { type: 'Art', name: 'Barisal Shilpakola Academy' },
    { type: 'Art', name: 'Mir Mujtaba Ali Art School (Kheyali Group Theatre)' },
    { type: 'Art', name: 'Shahid Altaf Mahmud Music School' },
    { type: 'Art', name: 'Khelaghar Barisal' },
    { type: 'Art', name: 'Udichi Barisal' },
    { type: 'Art', name: 'Chader Hat' },
    { type: 'Art', name: 'Akshar Shahittya' },
    { type: 'Art', name: 'Tansen Music School' },
    { type: 'Art', name: 'Prantik Music & Dance School' },
    { type: 'Special', name: 'Barisal Night High School' },
    { type: 'Special', name: 'Barisal Intellectually disabled School' }
];

School.insertMany(schools)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
