import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema

const cityAvgSchema = new Schema({
    name: {type: String, required: true},
    cf: {type: Number, required: true}
})

const CityAvg = model('CityAvg', cityAvgSchema)
export default CityAvg
