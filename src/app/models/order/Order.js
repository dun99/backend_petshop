const mongoose = require('mongoose');
const joi = require('joi');
const Schema = mongoose.Schema;
const joigoose = require('joigoose')(mongoose);
const Cart = require('../cart/Cart');
const User = require('../User');
const InfoCustomerOrder = require('./InfoCustomerOrder');

const joiOrder = joi.object({
  cart: joi.string().meta({
    _mongoose: {
      type: 'ObjectId',
      ref: Cart,
    },
  }),
  info: joi.string().meta({
    _mongoose: {
      type: 'ObjectId',
      ref: InfoCustomerOrder,
    },
  }),
  user: joi.string().meta({
    _mongoose: {
      type: 'ObjectId',
      ref: User,
    },
  }),
  orderStatus: joi.string(),
});

const Order = new Schema(joigoose.convert(joiOrder));

module.exports = mongoose.model('Orders', Order);
