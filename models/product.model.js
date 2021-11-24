const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    brand: { type: String, required: true },
    supplier: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    imageURL: { type: String, required: true },
    

    
});


const product = mongoose.model('product', productSchema);
module.exports = product;