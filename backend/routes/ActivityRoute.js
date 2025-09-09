const express = require("express");
const Activity = require("../models/ActivityModel");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        // latest first
        const activities = await Activity.find().sort({ createdAt: -1 }).limit(20);
        res.json(activities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
