import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    coins: {type: Number, default: 0},
    city: {type: String, default: null},
    state: {type: String, default: null},
    familyMembers: {type: Number, default: 0},
    fullName: {type: String, default: ""},
    cityAvg: {type: Number, default: null}
})

const User = model('User', userSchema)
export default User
