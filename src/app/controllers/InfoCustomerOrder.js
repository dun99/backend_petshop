const InfoCustomerOrder = require('../models/order/InfoCustomerOrder');
const factory = require('./HandleController');
exports.getAllInfoOrder = factory.getAll(InfoCustomerOrder);
exports.getOneInfoCustomerOrder = factory.getOne(InfoCustomerOrder);
exports.createInfoCustomerOrder = factory.createOne(InfoCustomerOrder);
exports.deleteInfoCustomerOrder = factory.deleteOne(InfoCustomerOrder);
