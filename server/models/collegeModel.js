const mongoose = require('mongoose')


const collegeSchema = new mongoose.Schema(
    {
        college: {
            type: String,
            name: String,
            address: String,
            founded: Number,
            campus: String,
            students: Number,
        }
    }
)


const modelName = 'College'

module.exports = mongoose.model(modelName, collegeSchema)