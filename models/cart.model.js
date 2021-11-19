const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    username: {type: "string", required: true},
    assetId: { type: mongoose.Schema.Types.ObjectId, ref: 'asset', required: true },
    assetName:{type: "string", required: true},
    quantity: { type: Number, default: 1 },
    price: { type: Number, required: true },
    imageURL: { type: "string", required: true, trim: true },
   
});




const cart = mongoose.model('cart', cartSchema);

module.exports= cart;