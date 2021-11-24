const express = require('express');
const router = express.Router();
const controller = require('../controller/product.controller');

module.exports = function () {
    router.post('/create', controller.addProduct);
    router.delete('/delete/:id', controller.deleteProduct);
    router.get('/getitem/:id', controller.getProductById);
    router.get('/getall', controller.getAllProduct);
    router.put('/update/:id', controller.updateproduct);


    return router;

}