const mongoose = require('mongoose')


const companySchema = new mongoose.Schema(
    {
        company: {
            type: String,
            name: String,
            address: String,
            phone: Number
        }
    }
)


const modelName = 'Company'

module.exports = mongoose.model(modelName, companySchema)