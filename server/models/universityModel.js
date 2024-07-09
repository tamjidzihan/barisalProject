const mongoose = require('mongoose')


const universitySchema = new mongoose.Schema(
    {
        university: {
            type: String,
            name: String,
            address: String,
            founded: Number,
            campus: String,
            students: Number,
        }
    }
)


const modelName = 'University'

module.exports = mongoose.model(modelName, universitySchema)