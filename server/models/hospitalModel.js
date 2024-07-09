const mongoose = require('mongoose')

const hospitalSchema = new mongoose.Schema(
    {
        hospital: {
            type: String,
            name: String,
            address: String,
            founded: Number,
        }
    }
)


const modelName = 'Hospital'

module.exports = mongoose.model(modelName, hospitalSchema)