import { hash, compare } from 'bcrypt';
import User from '../models/UserModel.js';

export async function registerUser(req, res) {
    try {
        const {name, email, password} = req.body
        const checkUser = await User.findOne({email})
        if (checkUser)
            return res.status(400).send('Email already registered')

        const hashedPassword = await hash(password, 10)
        const user = new User({name, email, password: hashedPassword})
        await user.save()
        res.status(201).send('Registered successfully')
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
            res.status(200).send('Login successful')
        else
            res.status(400).send('Invalid email or password')
    }
    catch (err) {
        res.status(500).send('Error logging in')
    }
}

export async function updateUser(req, res) {
    try {
        const {name, oldEmail, email, password} = req.body
        const user = await User.findOne({oldEmail})

        if (!user)
            return res.status(404).send('User not found!')

        if (name)
            user.name = name
        if (email)
            user.email = email
        if (password)
            user.password = password

        await user.save()
        res.status(200).send('Values successfully updated')
    }
    catch (err) {
        res.status(500).send('Error updating values')
    }
}

export async function deleteUser(req, res) {
    try {
        const {email} = req.body
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
