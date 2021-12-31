const mongoose = require('mongoose');
const joi = require('joi');
const Schema = mongoose.Schema;
const joigoose = require('joigoose')(mongoose);

const joiCommentScheme = joi.object({
  product: joi.string().meta({
    _mongoose: { type: 'ObjectId', ref: 'Product' },
  }),
  user: joi.string().meta({
    _mongoose: { type: 'ObjectId', ref: 'User' },
  }),
  createAt: joi.date(),
  content: joi.string(),
});

const Comment = new Schema(joigoose.convert(joiCommentScheme));

module.exports = mongoose.model('Comment', Comment);
