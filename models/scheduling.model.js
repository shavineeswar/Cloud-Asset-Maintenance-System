const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    username: { type: "string", required: true },
    AssetMain: { type: "string", required: true },
    AssetSub: { type: "string", required: true },
    eventFrequency: {type: [String],required: true}

});




const scheduling = mongoose.model('schedule', scheduleSchema);

module.exports = scheduling;