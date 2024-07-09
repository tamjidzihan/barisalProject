const mongoose = require('mongoose')


const touringZoneSchema = new mongoose.Schema(
    {
        touringZone: {
            type: String,
            name: String,
            address: String
        }
    }
)


const modelName = 'Touring Zone'

module.exports = mongoose.model(modelName, touringZoneSchema)