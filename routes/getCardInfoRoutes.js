'use strict';

const express = require('express');
const router = express.Router();

const User = require('../models/userModel');

router.get('/:id?', async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    res.render('template', {
        locals: {
            user: user,
        },
        partials: {
            partial: 'partial-getcardinfo',
        },
    });
});

module.exports = router;
