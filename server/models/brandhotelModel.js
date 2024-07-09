const mongoose = require('mongoose')


const brandHotelSchema = new mongoose.Schema(
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


const modelName = 'BrandHotel'

module.exports = mongoose.model(modelName, brandHotelSchema)