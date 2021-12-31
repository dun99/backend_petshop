const Cart = require('../models/cart/Cart');
const factory = require('./HandleController');
exports.getAllCarts = factory.getAllDeep(Cart, 'cartItem', 'item');
exports.getOneCart = factory.getOne(Cart, 'item');
exports.createCart = factory.createOne(Cart);
exports.deleteCart = factory.deleteOne(Cart);
