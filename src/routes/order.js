const express = require('express');
const router = express.Router();

const OrderController = require('../app/controllers/OrderController');

router
  .route('/')
  .post(OrderController.createOrder)
  .get(OrderController.getAllOrders);

router
  .route('/:id')
  .get(OrderController.getOneOrder)
  .put(OrderController.updateOrder);

router.route('/history/:userId').get(OrderController.getAllOrderUser);
module.exports = router;
