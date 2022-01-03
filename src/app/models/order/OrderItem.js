const mongoose = require('mongoose');
const joi = require('joi');
const Schema = mongoose.Schema;
const joigoose = require('joigoose')(mongoose);

const joiOrderItem = joi.object({
  item: joi
    .string()
    .meta({
      _mongoose: {
        type: 'ObjectId',
        ref: 'Product',
      },
    })
    .required(),
  quantity: joi.number(),
  price: joi.number(),
  orders: joi
    .string()
    .meta({
      _mongoose: {
        type: 'ObjectId',
        ref: 'Orders',
      },
    })
    .required(),
});

const OrderItem = new Schema(joigoose.convert(joiOrderItem));

module.exports = mongoose.model('OrderItem', OrderItem);
