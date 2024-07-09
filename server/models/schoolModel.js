const mongoose = require('mongoose')


const schoolSchema = new mongoose.Schema(
    {
        school: {
            type: String,
            name: String,
            address: String,
            founded: Number,
            campus: String,
            students: Number,
        }
    }
)


const modelName = 'School'

module.exports = mongoose.model(modelName, schoolSchema)