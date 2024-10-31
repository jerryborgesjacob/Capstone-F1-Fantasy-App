const express = require('express');
const Driver = require('../models/Driver');
const router = express.Router();

// Route to get all drivers
router.get('/', async (req, res) => {
    try {
        const drivers = await Driver.find();
        res.json(drivers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching drivers' });
    }
});

module.exports = router;
