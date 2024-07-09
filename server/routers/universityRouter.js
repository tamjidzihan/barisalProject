const express = require('express');
const University = require('../models/universityModel');
const router = express.Router();

// Create a new university
router.post('/', async (req, res) => {
    const university = new University(req.body);
    try {
        await university.save();
        res.status(201).send(university);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read all universities
router.get('/', async (req, res) => {
    const universities = await University.find();
    res.json(universities);
});


// Read university by ID
router.get('/:id', async (req, res) => {
    try {
        const universityByID = await University.findById(req.params.id);
        if (!universityByID) {
            return res.status(404).send();
        }
        res.json(universityByID);
    } catch (error) {
        res.status(400).send(error);
    }
});


// Update a university by ID
router.put('/:id', async (req, res) => {
    try {
        const university = await University.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!university) {
            return res.status(404).send();
        }
        res.send(university);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a university by ID
router.delete('/:id', async (req, res) => {
    try {
        const university = await University.findByIdAndDelete(req.params.id);
        if (!university) {
            return res.status(404).send();
        }
        res.send(university);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
