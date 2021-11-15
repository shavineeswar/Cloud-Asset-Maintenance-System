const express = require('express');
const router = express.Router();
const controller = require('../controller/externalworkorder.controller');

module.exports = function () {
  router.post('/create', controller.createExternalWork);
  router.get('/getall', controller.getAllExternalWorks);
  router.get('/:id', controller.getExternalWorkById);
//   router.get('/getbyasset/:id', controller.getInternalworkByAssetId);
//   router.get('/getperson/:id', controller.getPersonByAssetId);
  

  return router;
} 