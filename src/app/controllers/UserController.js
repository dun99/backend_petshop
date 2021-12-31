const User = require('../models/User');
const factory = require('./HandleController');
exports.getAllUser = factory.getAll(User);
exports.getOneUser = factory.getOne(User);
exports.createUser = factory.createOne(User);
exports.deleteUser = factory.deleteOne(User);
exports.updateUser = factory.updateOne(User);
