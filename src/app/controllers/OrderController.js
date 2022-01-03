const Orders = require('../models/order/Order');
const factory = require('./HandleController');
exports.getAllOrders = factory.getAll(Orders, 'user');
exports.createOrder = factory.createOne(Orders);
// exports.delete = factory.deleteOne(Cart);
