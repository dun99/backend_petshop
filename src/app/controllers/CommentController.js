const Comment = require('../models/Comment');
const factory = require('./HandleController');
exports.getAllComments = factory.getAll(Comment);
exports.getOneComment = factory.getOne(Comment);
exports.createComment = factory.createOne(Comment);
exports.deleteComment = factory.deleteOne(Comment);
exports.updateComment = factory.updateOne(Comment);
