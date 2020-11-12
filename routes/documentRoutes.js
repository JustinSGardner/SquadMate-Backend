const express = require('express');
const router = express.Router();

const Document = require('../models/documentModel');

// Get All Documents
router.get('/', async (req, res) => {
    const document = await Document.find({});
    res.json(document);
});

// Get Document by ID
router.get('/:id', async (req, res) => {
    const team = await Document.findById(req.params.id);
    res.json(team);
});

// Get Documents by Team ID
router.get('/team/:id', async (req, res) => {
    const documentsByTeam = await Document.find({ team: req.params.id });
    res.json(documentsByTeam);
});

// Create Document
router.post('/', async (req, res) => {
    try {
        const document = await Document.create(req.body);
        res.json(document);
    } catch (error) {
        res.json(error);
    }
});

// Delete Document by ID
router.delete('/:id', async (req, res) => {
    const document = await Document.findById(req.params.id);
    await document.remove();
    const remainingDocs = await Document.find({ team: document.team });
    res.json(remainingDocs);
});

module.exports = router;
