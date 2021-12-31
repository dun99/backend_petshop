const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController');

router
  .route('/')
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route('/:id')
  .get(productController.getOneProduct)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
