const mongoose = require('mongoose');
const joi = require('joi');
const Schema = mongoose.Schema;
const joigoose = require('joigoose')(mongoose);
const User = require('../User');

const joiOrder = joi.object({
  info: joi.object().keys({
    phone: joi.string(),
    city: joi.string(),
    district: joi.string(),
    lastName: joi.string(),
    firstName: joi.string(),
    desc: joi.string(),
  }),
  user: joi.string().meta({
    _mongoose: {
      type: 'string',
      ref: User,
    },
  }),
  orderStatus: joi.string(),
  orderTotalQuantity: joi.number(),
  orderTotalAmount: joi.number(),
});

const Order = new Schema(joigoose.convert(joiOrder));

module.exports = mongoose.model('Orders', Order);
