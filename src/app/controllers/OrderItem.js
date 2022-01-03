const OrderItem = require('../models/order/OrderItem');
const factory = require('./HandleController');
exports.getAllOrderItems = factory.getAll(OrderItem, 'orders item');
exports.getOneOrderItem = factory.getOne(OrderItem, 'item');
exports.createOrderItem = factory.createOne(OrderItem);
exports.deleteOrderItem = factory.deleteOne(OrderItem);
