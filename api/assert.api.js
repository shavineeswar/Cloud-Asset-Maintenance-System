const express = require('express');
const router = express.Router();
const controller = require('../controller/asset.controller');

module.exports = function () {
  router.post('/create', controller.createAsset);
  router.get('/getall', controller.getAllAssets);
  router.get('/count', controller.getAssetCount);
  router.get('/:id', controller.getAssetById);
  router.put('/edit/:id', controller.EditAsset);
  router.delete('/delete/:id', controller.DeleteAsset);

  

  return router;
} 