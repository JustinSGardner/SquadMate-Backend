const express = require('express');
const router = express.Router();

const Team = require('../models/teamModel');
const User = require('../models/userModel');

// Get All Teams
router.get('/', async (req, res) => {
    const team = await Team.find({});
    res.json(team);
});

// Get Team by ID
router.get('/:id', async (req, res) => {
    const team = await Team.findById(req.params.id);
    res.json(team);
});

// Get Users by Team ID
router.get('/:id/users', async (req, res) => {
    const usersByTeam = await User.find({ team: req.params.id });
    res.json(usersByTeam);
});

// Create Team
router.post('/', async (req, res) => {
    const team = await Team.create(req.body);
    res.json(team);
});

// Delete Team by ID
router.delete('/:id', async (req, res) => {
    const team = await Team.findById(req.params.id);
    team.remove();
    res.json(team);
});

module.exports = router;
