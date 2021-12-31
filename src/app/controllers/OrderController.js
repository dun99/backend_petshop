const Orders = require('../models/order/Order');
const factory = require('./HandleController');
exports.getAllOrders = factory.getAllDeepThreeLayers(
  Orders,
  'cart',
  'cartItem',
  'item'
);
// exports.getOneCart = factory.getOne(Cart, 'item');
// exports.createCart = factory.createOne(Cart);
// exports.deleteCart = factory.deleteOne(Cart);
