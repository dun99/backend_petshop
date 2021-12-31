const Category = require('../models/Category');
const factory = require('./HandleController');
exports.getAllCategories = factory.getAll(Category);
exports.getOneCategory = factory.getOne(Category);
exports.createCategory = factory.createOne(Category);
exports.deleteCategory = factory.deleteOne(Category);
exports.updateCategory = factory.updateOne(Category);
