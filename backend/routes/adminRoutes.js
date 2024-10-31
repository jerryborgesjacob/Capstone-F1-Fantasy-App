const express = require('express');
const { getAllTeams, getAllLeagues, deleteTeam, deleteLeague } = require('../controllers/adminController');
const router = express.Router();

router.get('/teams', getAllTeams); // Fetch all teams
router.get('/leagues', getAllLeagues); // Fetch all leagues
router.delete('/teams/:teamId', deleteTeam); // Delete a team by ID
router.delete('/leagues/:leagueId', deleteLeague); // Delete a league by ID

module.exports = router;
