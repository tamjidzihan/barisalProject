const mongoose = require('mongoose')


const marketSchema = new mongoose.Schema(
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
        }
    }
)


const modelName = 'Market'

module.exports = mongoose.model(modelName, marketSchema)