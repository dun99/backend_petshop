const Product = require('../models/Product');
const OrderItem = require('../models/order/OrderItem');
const factory = require('./HandleController');
exports.getAllProducts = factory.getAll(Product, 'category');
exports.getOneProduct = factory.getOne(Product, 'category');
exports.createProduct = factory.createOne(Product);
exports.deleteProduct = factory.deleteOne(Product, OrderItem);
exports.updateProduct = factory.updateOne(Product);
