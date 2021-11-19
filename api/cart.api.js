const express = require('express');
const router = express.Router();
const cartController = require('../controller/cart.controller');


module.exports = function () {
   
    router.post('/create', cartController.CreateCart);
    // router.get('/getallgiftitems', cartController.getallgiftitems);
  
    // router.get('/getallflower', cartController.getallflowercategory);
    router.get('/gettotal/:username', cartController.totalpay_peruser);
    // router.get('/getCartno/:username', cartController.getcartno);
    router.get('/getcartItems/:username', cartController.getcartItemByuserId);
    // router.get('/getItems/:id', cartController.getItemById);
    router.delete('/deletecart/:id', cartController.ondelete);
    router.put('/updatecart/:id', cartController.updatecartitems);
    
    return router;
}