const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({

    assetId: { type: String, required: true },
    Events:[{
        event:{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'events' } ,
        duedate: String,
        assign: Boolean
    }]


});


const EventTest = mongoose.model('Test', EventSchema);
module.exports = EventTest;