const Product = require('../models/Product');
const factory = require('./HandleController');
exports.getAllProducts = factory.getAll(Product, 'category');
exports.getOneProduct = factory.getOne(Product, 'category');
exports.createProduct = factory.createOne(Product);
exports.deleteProduct = factory.deleteOne(Product);
exports.updateProduct = factory.updateOne(Product);
