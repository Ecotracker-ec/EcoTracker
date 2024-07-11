const mongoose = require('mongoose')
const Schema = mongoose.Schema

const emissionSchema = new Schema({
    month: {type: String, required: true},
    year: {type: String, required: true},
    region: {type: String, required: true},
    electricity: {type: Number, required: true},
    gas: {type: String, required: false},
    wood: {type: Number, required: true},
    transport: {type: [String], required: true},
    waste: {type: Number, required: true},
    meal: {type: String, required: true},
    meals: {type: Number, required: true},
    renewable: {type: String, required: true},
    user: {type: String, required: true}
})

const Emission = mongoose.model('Emission', emissionSchema)
module.exports(Emission)
