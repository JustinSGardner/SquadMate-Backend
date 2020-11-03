const express = require('express');
const router = express.Router();

const User = require('../models/userModel');

// Get All Users
router.get('/', async (req, res) => {
    console.log('test');
    const users = await User.find({});
    res.json(users);
});

// Get User by ID
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
});

// Create User
router.post('/', async (req, res) => {
    console.log(req.body);
    const user = await User.create(req.body);
    res.json(user);
});

// Delete User by ID
router.delete(':/id', async (req, res) => {
    const user = await User.findById(req.params.id);
    user.remove();
    res.json(user);
});

module.exports = router;
