const express = require('express');
const router = express.Router();
const controller = require('../controller/internalworkorder.contrller');

module.exports = function () {
  router.post('/create', controller.createInternalwork);
  router.get('/getall', controller.getAllInternalworks);
  router.get('/:id', controller.getInternalworkById);
  router.get('/getbyasset/:id', controller.getInternalworkByAssetId);
  router.get('/getperson/:id', controller.getPersonByAssetId);
  router.get('/count/:id', controller.getInternalCount);
  router.get('/getassetname/:id', controller.getInternalworkByAssetName);
  


  return router;
} 