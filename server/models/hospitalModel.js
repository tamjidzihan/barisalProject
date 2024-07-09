const mongoose = require('mongoose')

const hospitalSchema = new mongoose.Schema(
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
        founded: {
            type: Number,
            required: false
        }
    }
)


const modelName = 'Hospital'

module.exports = mongoose.model(modelName, hospitalSchema)