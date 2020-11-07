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
    res.json(user);
});

// Create User
router.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

// UserLogin
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(email);
    if (user && (await user.comparePassword(password))) {
        const userProfile = await User.findById(user.id).select('-password');
        console.log(userProfile);
        res.json(userProfile);
    }
});

// Update User
router.put('/update/:id', async (req, res) => {
    console.log('ID', req.params.id), console.log('Body', req.body);
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    });
    res.json(user);
});

// Delete User by ID
router.delete(':/id', async (req, res) => {
    const user = await User.findById(req.params.id);
    user.remove();
    res.json(user);
});

module.exports = router;
