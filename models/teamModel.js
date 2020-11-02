const mongoose = require('mongoose');

const teamSchema = mongoose.Schema(
    {
        teamName: {
            type: String,
            required: true
        },
    }
);

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;