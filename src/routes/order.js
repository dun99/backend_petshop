const express = require('express');
const router = express.Router();

const OrderController = require('../app/controllers/OrderController');

router.route('/').get(OrderController.getAllOrders);
//   .get(CartController.getAllCarts);

// router.route('/:id').get(OrderController.get);
//   .delete(CartController.deleteCart);

module.exports = router;
