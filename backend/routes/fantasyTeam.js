const express = require('express');
const FantasyTeam = require('../models/FantasyTeam');
const { isAuthenticated } = require('../middleware/authMiddleware');
const router = express.Router();

// Route to add drivers and teams to a user's fantasy team
router.post('/add', isAuthenticated, async (req, res) => {
    const { drivers, teams } = req.body; // Drivers and teams IDs
    const userId = req.user._id;

    // Check if the number of drivers and teams is valid
    if (drivers.length !== 3) {
        return res.status(400).json({ message: 'You must select exactly 3 drivers.' });
    }
    if (teams.length !== 2) {
        return res.status(400).json({ message: 'You must select exactly 2 teams.' });
    }

    try {
        // Find the user's fantasy team
        let fantasyTeam = await FantasyTeam.findOne({ user: userId });

        if (!fantasyTeam) {
            // Create a new fantasy team if the user doesn't have one
            fantasyTeam = new FantasyTeam({ user: userId, drivers: [], teams: [] });
        }

        // Update fantasy team with selected drivers and teams
        fantasyTeam.drivers = drivers;
        fantasyTeam.teams = teams;

        await fantasyTeam.save();
        res.status(200).json({ message: 'Fantasy team updated successfully', fantasyTeam });
    } catch (error) {
        res.status(500).json({ message: 'Error updating fantasy team' });
    }
});

module.exports = router;
