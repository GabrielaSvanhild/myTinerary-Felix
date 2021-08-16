const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    src: { type: String, required: true },
    name:{type: String, required: true},
    country: { type: String, required: true },
    currency:{type: String, required: true},
    language:{type: String, required: true},
    description:{type: String, required: true},
})



const City = mongoose.model('city', citySchema)

module.exports = City