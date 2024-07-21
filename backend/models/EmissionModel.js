import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema

const emissionSchema = new Schema({
    month: {type: String, required: true},
    year: {type: String, required: true},
    region: {type: String, required: true},
    electricity: {type: Number, required: true},
    gas: {type: String, required: true},
    gasusage: {type: Number, required: true},
    wood: {type: Number, required: true},
    priv: {type: Number, required: true},
    waste: {type: Number, required: true},
    meal: {type: String, required: true},
    meals: {type: Number, required: true},
    renewable: {type: String, required: true},
    renewunit: {type: Number, required: true},
    totalemission: {type: Number, required: true},
    user: {type: String, required: true}
}, {timestamps: {createdAt: 'createdAt'}})

const Emission = model('Emission', emissionSchema)
export default Emission
