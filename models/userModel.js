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
    password: {
        type: String,
        required: true,
    },
    phone: {
        home: String,
        cell: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
    },
    parentForm: {
        rider: {
            firstName: String,
            lastName: String,
        },
        parentOne: {
            firstName: String,
            lastName: String,
            phone: {
                home: String,
                cell: String,
            },
        },
        parentTwo: {
            firstName: String,
            lastName: String,
            phone: {
                home: String,
                cell: String,
            },
        },
        emergencyContactOne: {
            firstName: String,
            lastName: String,
            phone: {
                home: String,
                cell: String,
            },
        },
        emergencyContactTwo: {
            firstName: String,
            lastName: String,
            phone: {
                home: String,
                cell: String,
            },
        },
    },
    insurance: {
        provider: String,
        group: String,
        number: String,
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
    allergies: String,
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
