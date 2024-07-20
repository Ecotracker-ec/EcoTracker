import jwt from 'jsonwebtoken'
import { hash, compare } from 'bcrypt';
import User from '../models/UserModel.js';
import 'cookie-parser'
import dotenv from 'dotenv'
import { CourierClient } from '@trycourier/courier'
import CityAvg from '../models/CityAvgModel.js';

dotenv.config()
const courier = new CourierClient({ authorizationToken: process.env.COURIER_AUTH_KEY});

export function authenticateUser(req, res, next) {
    const token = req.headers.authorization
    if (!token)
        res.status(401).send('Not Authorized')

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err)
            return res.status(403)
        req.user = user
        next()
    })
}

export async function registerUser(req, res) {
    try {
        const {name, email, password} = req.body
        const checkUser = await User.findOne({email})
        if (checkUser)
            return res.status(400).send('Email already registered')

        const hashedPassword = await hash(password, 10)
        const user = new User({name, email, password: hashedPassword})
        await user.save()

        const { requestId } = await courier.send({
        message: {
            to: {
            email: email,
            },
            template: "YHCHG3EDTKM0DMKK3RWJBC6NMWCJ",
            data: {
            Name: name,
            },
        },
        });

        res.status(201).send('Registered successfully')
    }
    catch (err) {
        res.status(500).send(`error: ${err}`)
    }
}

export async function additionalInfo(req, res) {
    try {
        const {email, city, state, familyMembers} = req.body
        const user = await User.findOne({email})

        if (!user)
            return res.status(400).send('User not found')

        user.state = state
        user.city = city
        user.familyMembers = familyMembers

        const cityavg = CityAvg.findOne({name: city})
        user.cityAvg = cityavg

        await user.save()
        res.status(200).send('Added values!')
    }
    catch (err) {
        res.status(500).send(`error: ${err}`)
    }
}

export async function loginUser(req, res) {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if (!user)
            return res.status(400).send('Email not registered')

        if (user && await compare(password, user.password))
        {
            const token = jwt.sign({id: user._id, email: user.email}, process.env.SECRET_KEY)
            res.cookie('token', token, {httpOnly: true, secure: false})
            res.status(200).send('Login successful')
        }
        else
            res.status(400).send('Invalid email or password')
    }
    catch (err) {
        res.status(500).send('Error logging in')
    }
}

export async function updateUser(req, res) {
    try {
        const {name, email} = req.body
        const oldEmail = req.user.email
        console.log(oldEmail)
        const user = await User.findOne({email: oldEmail})

        if (!user)
            return res.status(404).send('User not found!')

        if (name)
            user.name = name
        if (email)
            user.email = email

        await user.save()
        res.status(200).send('Values successfully updated')
    }
    catch (err) {
        res.status(500).send(`${err}`)
    }
}

export async function deleteUser(req, res) {
    try {
        const email = req.user.email
        const user = await User.findOne({email})

        if (!user)
            return res.status(404).send('User not found')

        await user.remove()
        res.status(200).send('User deleted successfully')
    }
    catch (err) {
        res.status(500).send('Error deleting user')
    }
}

export async function getAllUsers(req, res) {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    }
    catch (err) {
        res.status(500).send('Error getting all users')
    }
}

export async function forgotPassword(req, res) {
    const email = req.body.email
    const user = await User.findOne({email})

    if (!user)
        res.status(404).send('Email not registered')

    const password = user.password
    const { requestId } = await courier.send({
        message: {
          to: {
            email: email,
          },
          template: "HH763FT5W6MBH6NESPFYMTVCB0N2",
          data: {
            Name: user.name,
            pswd: password,
          },
        },
      })

    res.status(200).send('Password sent to registered email id')
}
