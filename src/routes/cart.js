const express = require('express');
const router = express.Router();

const CartController = require('../app/controllers/CartController');

router
  .route('/')
  .post(CartController.createCart)
  .get(CartController.getAllCarts);

router
  .route('/:id')
  .get(CartController.getOneCart)
  .delete(CartController.deleteCart);

module.exports = router;
