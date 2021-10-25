const express = require('express');
const router = express.Router();
const controller = require('../controller/alert.control');

module.exports = function () {
  router.post('/create', controller.createAlert);
  router.get('/getall', controller.getAllAlerts);
  router.get('/:id', controller.getAlertById);
  

  return router;
} 