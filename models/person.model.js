const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    
    
    department: {type: String, required: true},
    personName: {type: String, required: true},
    
    
    
});


const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;