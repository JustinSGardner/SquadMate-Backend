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
        },
        parentForm : {
            rider: {
                firstName: String,
                lastName: String
            },
            parentOne: {
                firstName: String,
                lastName: String,
                phone: {
                    home: String,
                    cell: String
                }
            },
            parentTwo: {
                firstName: String,
                lastName: String,
                phone: {
                    home: String,
                    cell: String
                }
            },
            emergencyContactOne: {
                firstName: String,
                lastName: String,
                phone: {
                    home: String,
                    cell: String
                }
            },
            emergencyContactTwo: {
                firstName: String,
                lastName: String,
                phone: {
                    home: String,
                    cell: String,
                }
            }
        },
        insurance: {
            provider: String,
            group: String,
            number: String
        },
        medicalConditions: {
            type: Boolean,
            default: false
        },
        asthma: {
            type: Boolean,
            default: false
        },
        medicationRequired: {
            type: Boolean,
            default: false
        },
        ibprofenRelease: {
            type: Boolean,
            default: false
        },
        allergies: String
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;