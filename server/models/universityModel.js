const mongoose = require('mongoose')


const universitySchema = new mongoose.Schema(
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
        },
        campus: {
            type: String,
            required: false
        },
        students: {
            type: Number,
            required: false
        }
    }
)


const modelName = 'University'

module.exports = mongoose.model(modelName, universitySchema)