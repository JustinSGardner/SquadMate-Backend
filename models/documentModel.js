const mongoose = require('mongoose');

const documentSchema = mongoose.Schema({
    formName: {
        type: String,
        default: 'New Form',
    },
    url: {
        type: String,
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        default: '',
    },
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
