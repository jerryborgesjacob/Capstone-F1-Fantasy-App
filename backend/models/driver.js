const mongoose = require("mongoose");

const Driver = mongoose.model(
    "Driver",
    new mongoose.Schema({
        name: { type: String, required: true },
        points: { type: Number, default: 0 },
        },
    )
);

module.exports = Driver;