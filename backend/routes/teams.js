const express = require('express');
const Team = require('../models/Team');
const router = express.Router();

// Route to get all teams
router.get('/', async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching teams' });
    }
});

module.exports = router;
