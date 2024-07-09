const mongoose = require('mongoose')


const marketSchema = new mongoose.Schema(
    {
        market: {
            type: String,
            name: String,
            address: String,
        }
    }
)


const modelName = 'Market'

module.exports = mongoose.model(modelName, marketSchema)