const mongoose = require('mongoose')


const companySchema = new mongoose.Schema(
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


const modelName = 'Company'

module.exports = mongoose.model(modelName, companySchema)