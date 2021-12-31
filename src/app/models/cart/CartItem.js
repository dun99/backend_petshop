const mongoose = require('mongoose');
const joi = require('joi');
const Schema = mongoose.Schema;
const joigoose = require('joigoose')(mongoose);

const joiCartItem = joi.object({
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
});

const CartItem = new Schema(joigoose.convert(joiCartItem));

module.exports = mongoose.model('CartItem', CartItem);
