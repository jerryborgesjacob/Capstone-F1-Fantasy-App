const express = require('express');
const { updateLeaguePoints } = require('../controllers/pointsController');
const { getLeaderboard } = require('../controllers/LeaderboardController');
const router = express.Router();

router.post('/update-points', updateLeaguePoints);
router.get('/:leagueId/leaderboard', getLeaderboard);

module.exports = router;
