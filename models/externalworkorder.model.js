const mongoose = require('mongoose');

const ExternalWorkOrderSchema = new mongoose.Schema({
    
    assetId: {type: String, required: true}, 
    department: {type: String, required: true},
    assetowner: {type: String, required: true},
    person:  [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Person' }] ,
    email:{type: String, required: true},
    phone:{type: String, required: true},
    company:{type: String, required: true},
    c_email: {type: String, required: true},
    c_phone: {type: String, required: true},
    date: {type: String, required: true},  
    
    
});


const ExternalWorkOrder = mongoose.model('externalwork', ExternalWorkOrderSchema);
module.exports = ExternalWorkOrder;