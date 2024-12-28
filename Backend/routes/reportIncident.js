const express = require('express');
const router = express.Router();
const Incidents = require('../models/Incidents');








router.post('/report', async(req, res) => {
    const { type, description, location, status, date, time, reporter,reporterContact } = req.body;
      try {
        
        const incident = await Incidents.create({ type, description, location, status, date, time, reporter,reporterContact });
        res.status(201).json({ message: 'Incident Reported !' });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
});

router.get('/', async(req, res) => {
    try {
        const incidents = await Incidents.find();
        res.status(200).json({ incidents });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;