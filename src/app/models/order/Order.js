const mongoose = require('mongoose');
const joi = require('joi');
const Schema = mongoose.Schema;
const joigoose = require('joigoose')(mongoose);
const User = require('../User');

const joiOrder = joi.object({
  info: joi.object(),
  user: joi.string().meta({
    _mongoose: {
      type: 'ObjectId',
      ref: User,
    },
  }),
  orderStatus: joi.string(),
  orderTotalQuantity: joi.number(),
  orderTotalAmount: joi.number(),
});

const Order = new Schema(joigoose.convert(joiOrder));

module.exports = mongoose.model('Orders', Order);
