const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
    assetId: { type: String, required: true },
    assetName: { type: String, required: true },
    date: { type: String, required: true },
    period: { type: String, required: true },
    alert1: { type: String, required: true },
    alert2: { type: String, required: true },
    alert3: { type: String },
    alert4: { type: String },
    
    
});

const Alert = mongoose.model('alert', AlertSchema);
module.exports = Alert;