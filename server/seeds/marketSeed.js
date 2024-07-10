const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants'); // Adjust the path if necessary

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const marketSchema = new mongoose.Schema({
    type: { type: String, required: false },
    name: { type: String, required: false },
    address: { type: String, required: false }
});

const Market = mongoose.model('Market', marketSchema);

const markets = [
    { name: 'Jonaki Shopping Complex' },
    { name: 'Fatema Center' },
    { name: 'Mohsin Market' },
    { name: 'City Plaza Market' },
    { name: 'Barishal market' },
    { name: 'St.Peter Market' },
    { name: 'Perk mart BD' },
    { name: 'Easy Fashion Ltd.' },
    { name: 'Dr. Sobhan Complex' },
    { name: 'Top Ten Mart Ltd.' },
    { name: 'Patarhat' },
    { name: 'Chowdhury Market' },
    { name: 'Hazi Market' },
    { name: 'Adv. SHAHEEN COMPLEX' },
    { name: 'Katpotty Road' },
    { name: 'Barisal Online Shop' },
    { name: 'BDesh Online Shopping' },
    { name: 'Rakib Best Fashion House in Barisal' },
    { name: 'Ogrozatra Market' },
    { name: 'SAILOR' },
    { name: '1 to 99 market' }
];

Market.insertMany(markets)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
