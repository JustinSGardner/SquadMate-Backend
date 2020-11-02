const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        isAdmin : {
            type: Boolean,
            default: false
        },
        team : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Team'
        }
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;