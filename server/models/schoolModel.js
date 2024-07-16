const mongoose = require('mongoose')


const schoolDetailSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: false
        },
        address: {
            type: String,
            required: false
        },
        phone: {
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

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    result: [schoolDetailSchema]
});


const modelName = 'School'

module.exports = mongoose.model(modelName, schoolSchema)