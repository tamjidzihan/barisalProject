const mongoose = require('mongoose')


const launchesServiceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false
        },
        waterway: {
            type: String,
            required: false
        },
        contact: {
            type: Number,
            required: false
        },
        address: {
            type: String,
            required: false
        }
    }
)


const modelName = 'LaunchesService'

module.exports = mongoose.model(modelName, launchesServiceSchema)