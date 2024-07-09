const express = require('express');
const College = require('../models/collegeModel');
const router = express.Router();

// Create a new College
router.post('/', async (req, res) => {
    const college = new College(req.body);
    try {
        await college.save();
        res.status(201).send(college);
    } catch (error) {
        res.status(400).send(error);
    }
});


// Read all College
router.get('/', async (req, res) => {
    const colleges = await College.find();
    res.json(colleges);
});


// Read College by ID
router.get('/:id', async (req, res) => {
    try {
        const collegeByID = await College.findById(req.params.id);
        if (!collegeByID) {
            return res.status(404).send();
        }
        res.json(collegeByID);
    } catch (error) {
        res.status(400).send(error);
    }
});


// Update a College by ID
router.put('/:id', async (req, res) => {
    try {
        const college = await College.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!college) {
            return res.status(404).send();
        }
        res.send(college);
    } catch (error) {
        res.status(400).send(error);
    }
});


// Delete a College by ID
router.delete('/:id', async (req, res) => {
    try {
        const college = await College.findByIdAndDelete(req.params.id);
        if (!college) {
            return res.status(404).send();
        }
        res.send(college);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
