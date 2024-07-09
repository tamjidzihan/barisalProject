const mongoose = require('mongoose')


const bloodbankSchema = new mongoose.Schema(
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


const modelName = 'BloodBank'

module.exports = mongoose.model(modelName, bloodbankSchema)