const mongoose = require('mongoose')


const busServiceSchema = new mongoose.Schema(
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
        destinations: {
            type: String,
            required: false
        }
    }
)


const modelName = 'BusService'

module.exports = mongoose.model(modelName, busServiceSchema)