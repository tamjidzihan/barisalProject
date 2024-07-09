const mongoose = require('mongoose')


const governmentServiceSchema = new mongoose.Schema(
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
        services: {
            type: String,
            required: false
        },
        website: {
            type: String,
            required: false
        }
    }
)


const modelName = 'GovernmentService'

module.exports = mongoose.model(modelName, governmentServiceSchema)