const express = require('express');
const router = express.Router();

const categoryController = require('../app/controllers/CategoryController');

router
  .route('/')
  .get(categoryController.getAllCategories)
  .post(categoryController.createCategory);

router
  .route('/:id')
  .get(categoryController.getOneCategory)
  .put(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

module.exports = router;
