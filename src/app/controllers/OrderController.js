const Order = require('../models/order/Order');
const OrderItem = require('../models/order/OrderItem');
const factory = require('./HandleController');

exports.getAllOrders = factory.getAllOrder(Order, OrderItem, 'user');
exports.getAllOrderUser = factory.getAllOrderUser(Order, OrderItem, 'user');
exports.createOrder = factory.createOrder(Order, OrderItem);
exports.updateOrder = factory.updateOne(Order);
exports.getOneOrder = factory.getOne(Order);
