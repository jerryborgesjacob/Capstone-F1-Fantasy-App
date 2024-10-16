const Driver = require('../models/driver');

exports.getAllDrivers = async (req, res) => {
    try {
        const Drivers = await Driver.find();
        res.json(Drivers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createDriver = async (req, res) => {
   const Driver = new Driver({
        name: req.body.name,
        points: req.body.score
    });

    try {
        const newDriver = await Driver.save();
        res.status(201).json(newDriver);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};