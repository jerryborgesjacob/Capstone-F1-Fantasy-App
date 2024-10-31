const League = require('../models/League');

async function getLeaderboard(req, res) {
  try {

    const leagueId = req.params.leagueId; // Assuming leagueId is passed as a URL parameter
    const league = await League.findById(leagueId);

    if (!league) {
      return res.status(404).json({ error: 'League not found' });
    }


    const sortedUsers = league.users
      .map(user => ({ username: user.username, totalPoints: user.totalPoints || 0 }))
      .sort((a, b) => b.totalPoints - a.totalPoints);

    res.json(sortedUsers);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching leaderboard' });
  }
}

module.exports = { getLeaderboard };
