const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    avatarUrl: {
        type: String,
        default: '',
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        home: {
            type: String,
            default: '',
        },
        cell: {
            type: String,
            default: '',
        },
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        default: '5fa2dd0998fe8fbfdf5eaac2',
    },
    parentForm: {
        rider: {
            firstName: {
                type: String,
                default: '',
            },
            lastName: {
                type: String,
                default: '',
            },
        },
        parentOne: {
            firstName: {
                type: String,
                default: '',
            },
            lastName: {
                type: String,
                default: '',
            },
            phone: {
                home: {
                    type: String,
                    default: '',
                },
                cell: {
                    type: String,
                    default: '',
                },
            },
        },
        parentTwo: {
            firstName: { type: String, default: '' },
            lastName: { type: String, default: '' },
            phone: {
                home: { type: String, default: '' },
                cell: { type: String, default: '' },
            },
        },
        emergencyContactOne: {
            firstName: {
                type: String,
                default: '',
            },
            lastName: {
                type: String,
                default: '',
            },
            phone: {
                home: {
                    type: String,
                    default: '',
                },
                cell: {
                    type: String,
                    default: '',
                },
            },
        },
        emergencyContactTwo: {
            firstName: {
                type: String,
                default: '',
            },
            lastName: {
                type: String,
                default: '',
            },
            phone: {
                home: {
                    type: String,
                    default: '',
                },
                cell: {
                    type: String,
                    default: '',
                },
            },
        },
    },
    insurance: {
        provider: {
            type: String,
            default: '',
        },
        group: {
            type: String,
            default: '',
        },
        number: {
            type: String,
            default: '',
        },
    },
    medicalConditions: {
        type: Boolean,
        default: false,
    },
    asthma: {
        type: Boolean,
        default: false,
    },
    medicationRequired: {
        type: Boolean,
        default: false,
    },
    ibprofenRelease: {
        type: Boolean,
        default: false,
    },
    allergies: {
        type: String,
        default: '',
    },
});

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
