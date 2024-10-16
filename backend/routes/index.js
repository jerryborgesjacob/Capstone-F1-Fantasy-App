const express = require('express');
const router = express.Router();
const raceController = require('../controllers/raceController');
const teamController = require('../controllers/teamController');
const driverController = require('../controllers/driverController');

router.get('/races', raceController.getAllRaces);
router.post('/races', raceController.createRace);

router.get('/teams', teamController.getAllTeams);
router.post('/teams', teamController.createTeam);

router.get('/drivers', driverController.getAllDrivers);
router.post('/drivers', driverController.createDriver);

module.exports = router;