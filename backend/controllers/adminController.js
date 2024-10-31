const Team = require('../models/Team');
const League = require('../models/League');

// Fetch all teams
async function getAllTeams(req, res) {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching teams' });
  }
}

// Fetch all leagues
async function getAllLeagues(req, res) {
  try {
    const leagues = await League.find();
    res.json(leagues);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching leagues' });
  }
}

// Delete a team
async function deleteTeam(req, res) {
  try {
    const { teamId } = req.params;
    await Team.findByIdAndDelete(teamId);
    res.json({ message: 'Team deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting team' });
  }
}

// Delete a league
async function deleteLeague(req, res) {
  try {
    const { leagueId } = req.params;
    await League.findByIdAndDelete(leagueId);
    res.json({ message: 'League deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting league' });
  }
}

module.exports = { getAllTeams, getAllLeagues, deleteTeam, deleteLeague };
