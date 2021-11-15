const express = require('express');
const router = express.Router();
const controller = require('../controller/asset.controller');

module.exports = function () {
  router.post('/create', controller.createAssert);
  router.get('/getall', controller.getAllAsserts);
  router.get('/count', controller.getAssetCount);
  router.get('/:id', controller.getAssetById);
  

  return router;
} 