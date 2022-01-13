const express = require('express');
const router = express.Router();
const controller = require('../controller/event.controller');

module.exports = function () {
  
  router.get('/getall', controller.getEvents);
  router.get('/getbyType', controller.getEventsByAssetType);
  
  return router;
} 