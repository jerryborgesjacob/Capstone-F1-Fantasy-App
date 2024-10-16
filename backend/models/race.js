const mongoose = require("mongoose");

const Race = mongoose.model(
    "Race",
    new mongoose.Schema({
        date: { type: Date, required: true },
        teams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team" }],
        winner: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
    })
);

module.exports = Race;