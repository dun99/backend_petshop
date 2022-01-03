const express = require('express');
const router = express.Router();

const OrderItemController = require('../app/controllers/OrderItem');

router
  .route('/')
  .post(OrderItemController.createOrderItem)
  .get(OrderItemController.getAllOrderItems);

router
  .route('/:id')
  .get(OrderItemController.getOneOrderItem)
  .delete(OrderItemController.deleteOrderItem);

module.exports = router;
