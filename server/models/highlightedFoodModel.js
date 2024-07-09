const mongoose = require('mongoose')


const highlightedFoodSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: false
        },
        description: {
            type: Number,
            required: false
        }
    }
)


const modelName = 'HighlightedFood'

module.exports = mongoose.model(modelName, highlightedFoodSchema)