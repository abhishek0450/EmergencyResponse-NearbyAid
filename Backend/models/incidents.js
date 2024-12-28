//type, description, location, status, date, time, user
const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    time: {
        type: String,
        default: () => new Date().toLocaleTimeString(),
        required: true
    },
    reporter: {
        type: String,
        required: true
    },
    reporterContact: {
        type: String,
        required: false
    }
});

const Incident = mongoose.model('Incident', incidentSchema);

module.exports = Incident;


