const mongoose = require('mongoose');

const InternalWorkOrderSchema = new mongoose.Schema({
    
    assetId: { type: String, required: true},
    department: {type: String, required: true},
    person:  [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Person' }] ,
    date: {type: String, required: true},
    priority: {type: String, required: true},
    dueDate: {type: String, required: true},
    status:{type: String, required: true},
    
    
});


const InternalWorkOrder = mongoose.model('internalwork', InternalWorkOrderSchema);
module.exports = InternalWorkOrder;