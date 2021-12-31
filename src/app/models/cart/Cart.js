const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;
const joigoose = require('joigoose')(mongoose);

const CartItem = require('./CartItem');
const joiCart = Joi.object({
  cartItem: Joi.array()
    .items(
      Joi.string().meta({
        _mongoose: { type: 'ObjectId', ref: CartItem },
      })
    )
    .required(),
  cartTotalQuantity: Joi.number().positive(),
  cartTotalAmount: Joi.number(),
});

const Cart = new Schema(joigoose.convert(joiCart));

module.exports = mongoose.model('Carts', Cart);
