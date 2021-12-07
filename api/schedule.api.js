const express = require('express');
const router = express.Router();
const controller = require('../controller/scheduling.controller');

module.exports = function () {
  router.post('/create', controller.addSchedule);
  router.get('/getall', controller.getAllSchedule);
  router.get('/:email', controller.getScheduleByEmail);
  router.get('/schedule/:id', controller.getAllScheduleById)
  router.put('/update/:email', controller.updateSchedule)


  return router;
} 