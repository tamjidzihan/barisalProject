const mongoose = require('mongoose')


const busServiceDetailSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: false
        },
        phone: {
            type: String,
            required: false
        },
        destinations: {
            type: String,
            required: false
        }
    }
)


const busServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    result: [busServiceDetailSchema]
});



const modelName = 'BusService'

module.exports = mongoose.model(modelName, busServiceSchema)