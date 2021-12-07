const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({

    assetId: { type: String, required: true },
    Events: [{
        name: String, 
        eventfrequency: String,
        duedate: String,
        assign: Boolean
    }]


});


const EventTest = mongoose.model('Test', EventSchema);
module.exports = EventTest;