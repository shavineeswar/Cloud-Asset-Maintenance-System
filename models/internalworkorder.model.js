const mongoose = require('mongoose');

const InternalWorkOrderSchema = new mongoose.Schema({
    
    assetId: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'asset' }] , 
    workorderId: {type: String, required: true},
    department: {type: String, required: true},
    assetowner: {type: String, required: true},
    person:  [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Person' }] ,
    email:{type: String, required: true},
    phone:{type: String, required: true},
    date: {type: String, required: true}, 
    status: {type: String, required: true}, 
    
});


const InternalWorkOrder = mongoose.model('internalwork', InternalWorkOrderSchema);
module.exports = InternalWorkOrder;