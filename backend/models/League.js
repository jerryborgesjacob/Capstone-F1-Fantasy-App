// models/League.js
const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
  name: String,
  type: String, // 'private' or 'public'
  maxPlayers: Number,
  users: [{
    userId: mongoose.Schema.Types.ObjectId,
    team: [{ driverId: String, points: Number }]
  }]
});

module.exports = mongoose.model('League', leagueSchema);
