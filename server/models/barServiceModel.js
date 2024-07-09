const mongoose = require('mongoose')


const barServiceSchema = new mongoose.Schema(
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
        },
        description: {
            type: String,
            required: false
        }
    }
)


const modelName = 'BARService'

module.exports = mongoose.model(modelName, barServiceSchema)