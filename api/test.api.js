const express = require('express');
const router = express.Router();
const controller = require('../controller/test.cont');

module.exports = function () {
  router.post('/create', controller.addTest);
  router.get('/', controller.getAllTest);
  router.get('/asset/:id', controller.getTestByAssetId);
  router.put('/edit/:id', controller.EditTest);

  
  return router;
} 