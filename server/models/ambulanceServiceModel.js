const mongoose = require('mongoose')


const ambulanceServiceSchema = new mongoose.Schema(
    {
        ambulanceService: {
            type: String,
            name: String,
            address: String,
            phone: Number
        }
    }
)


const modelName = 'AmbulanceService'

module.exports = mongoose.model(modelName, ambulanceServiceSchema)