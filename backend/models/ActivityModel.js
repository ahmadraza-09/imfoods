// models/Activity.js
const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
    {
        type: { type: String, enum: ["product", "blog", "query"], required: true },
        message: { type: String, required: true },
    },
    { timestamps: true } // adds createdAt, updatedAt automatically
);

module.exports = mongoose.model("Activity", activitySchema);
