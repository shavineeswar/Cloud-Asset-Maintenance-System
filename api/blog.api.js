const express = require('express');
const router = express.Router();
const controller = require('../controller/blog.controller');

module.exports = function () {
  router.post('/create', controller.createBlog);
  router.get('/getall', controller.getAllBlogs);
  router.get('/:id', controller.getBlogById);
  

  return router;
} 