const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const authRoutes = require('./routes/auth')
const calcRoutes = require('./routes/calc')

const app = express()
const port = 3000

app.use(express.json())

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

const uri = `mongodb+srv://${username}:${password}@cluster0.wtftkpy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas', err))

app.use('/auth', authRoutes)
app.use('/calc', calcRoutes)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
