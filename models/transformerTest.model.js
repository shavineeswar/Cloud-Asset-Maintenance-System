const mongoose = require('mongoose');

const TransformerSchema = new mongoose.Schema({
    
    assetId: {type: String, required: true}, 
    Test1: {type: Boolean, required: true},
    Test2: {type: Boolean, required: true},
    Test3: {type: Boolean, required: true},
    Test4: {type: Boolean, required: true},
    Test5: {type: Boolean, required: true},
    Test6: {type: Boolean, required: true},
    Test7: {type: Boolean, required: true},
    Test8: {type: Boolean, required: true},
    Test9: {type: Boolean, required: true},
    Test10: {type: Boolean, required: true},
    
});


const TransformerTest = mongoose.model('Transformer Test', TransformerSchema);
module.exports = TransformerTest;