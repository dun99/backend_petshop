const express = require('express');
const router = express.Router();

const OrderController = require('../app/controllers/OrderController');

router
  .route('/')
  .post(OrderController.createOrder)
  .get(OrderController.getAllOrders);

module.exports = router;
