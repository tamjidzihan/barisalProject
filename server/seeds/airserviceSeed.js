const mongoose = require('mongoose');

// Replace with your MongoDB URI
const { MONGO_URI } = require('../constants');
const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


    const airServiceSchema = new mongoose.Schema(
        {
            type: {
                type: String,
                required: false
            },
            name: {
                type: String,
                required: false
            },
            contact: {
                type: String,
                required: false
            },
            Location: {
                type: String,
                required: false
            }
        }
    )


const airService = mongoose.model('AirService', airServiceSchema)

// Data to be inserted (excluding the `id` field)
const services = [
   {
    name:"Biman Bangladesh Airlines",
    contact:"For booking and inquiries, visit Biman Bangladesh Airlines or contact their customer service.",
    Location:"Barishal Airport (BZL) Barishal, Bangladesh",
   },
   {
    name:"US-Bangla Airlines",
    contact:"For booking and inquiries, visit Biman Bangladesh Airlines or contact their customer service.",
    Location:"Barishal Airport (BZL) Barishal, Bangladesh",
   }
];

// Insert data into the database
airService.insertMany(services)
    .then(() => {
        console.log('Air Services inserted');
        mongoose.connection.close();
    })
    .catch(err => console.error(err));
