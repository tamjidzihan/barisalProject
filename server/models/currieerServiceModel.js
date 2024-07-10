const mongoose = require('mongoose')


const currieerServiceSchema = new mongoose.Schema(
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
        branch: {
            type: String,
            required: false
        },
        phone: {
            type: Number,
            required: false
        }
    }
)


const modelName = 'CurrieerService'

module.exports = mongoose.model(modelName, currieerServiceSchema)