const express = require('express');
const router = express.Router();
const controller = require('../controller/person.controller');

module.exports = function () {
  router.post('/create', controller.createPerson);
  router.get('/getall', controller.getAllPersons);
   router.get('/:id', controller.getPersonById);
  

  return router;
}