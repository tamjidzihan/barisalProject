const mongoose = require('mongoose')


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


const modelName = 'AirService'

module.exports = mongoose.model(modelName, airServiceSchema)