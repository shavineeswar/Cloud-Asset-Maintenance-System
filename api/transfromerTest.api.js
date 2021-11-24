const express = require('express');
const router = express.Router();
const controller = require('../controller/tranformer.controller');

module.exports = function () {
  router.post('/create', controller.addTransformerTest);
  router.get('/:id', controller.getTransformerTestByAssetId);
  router.put('/edit/:id', controller.EditTransformerTest);

  
  return router;
} 