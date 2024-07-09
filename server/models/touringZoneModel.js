const mongoose = require('mongoose')


const touringZoneSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: false
        },
        address: {
            type: String,
            required: false
        },
        phone: {
            type: Number,
            required: false
        }

    }
)


const modelName = 'TouringZone'

module.exports = mongoose.model(modelName, touringZoneSchema)