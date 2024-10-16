const Race = require('../models/race');

exports.getAllRaces = async (req, res) => {
    try {
        const Races = await Race.find();
        res.json(Races);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createRace = async (req, res) => {
    const Race = new Race({
        date: req.body.date,
        teams: req.body.teams,
        winner: req.body.winner,
    });

    try {
        const newRace = await Race.save();
        res.status(201).json(newRace);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};