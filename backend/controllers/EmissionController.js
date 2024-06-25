const Emission = require('../models/EmissionModel')

exports.createEmission = async (req, res) => {
    try {
        const {month, year, area, electricity, gas, wood, travel, waste, meal, meals, renewable} = req.body
        const email = req.body.email
        const checkEmission = Emission.find({
            user: email,
            month: month,
            year: year
        })

        if (checkEmission)
            return res.status(400).send('Emission data for this month and year already exists')

        const emission = new Emission({
            month,
            year,
            region: area,
            electricity,
            gas,
            wood,
            transport: travel,
            waste,
            meal,
            meals,
            renewable,
            user: email
        })
        await emission.save()
        res.status(201).send("Created Successfully")
    }
    catch (err) {
        res.status(500).send("Error creating new emission")
    }
}

exports.getEmission = async (req, res) => {
    try {
        //const email = req.body.email
        const {month, year, email} = req.query

        const emission = await Emission.find({
            user: email,
            month: month,
            year: year
        })
        res.status(200).json(emission)
    }
    catch (err) {
        res.status(500).send("Error finding the emission")
    }
}
