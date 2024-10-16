const mongoose = require("mongoose");

const Team = mongoose.model(
    "Team",
    new mongoose.Schema({
        name: { type: String, required: true },
        drivers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Driver" }],
    })
);

module.exports = Team;