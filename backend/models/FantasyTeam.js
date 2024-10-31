const mongoose = require('mongoose');

const fantasyTeamSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    drivers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Driver' }],
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
});

module.exports = mongoose.model('FantasyTeam', fantasyTeamSchema);
