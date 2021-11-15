const mongoose = require('mongoose');

const ExternalWorkOrderSchema = new mongoose.Schema({
    
    assetId: { type: String, required: true},
    Name: {type: String, required: true},
    Email:  [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Person' }] ,
    Phone: {type: String, required: true},
    Test: {type: String, required: true},
    Date: {type: String, required: true},
    Comments:{type: String, required: true},
    
    
});


const ExternalWorkOrder = mongoose.model('externalwork', ExternalWorkOrderSchema);
module.exports = ExternalWorkOrder;