const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;
const joigoose = require('joigoose')(mongoose);

const joiInfoCustomerOrder = Joi.object({
  city: Joi.string().required(),
  street: Joi.string().required(),
  phone: Joi.string(),
  district: Joi.string(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  desc: Joi.string(),
});

const InfoCustomerOrder = new Schema(joigoose.convert(joiInfoCustomerOrder));

module.exports = mongoose.model('InfoCustomerOrder', InfoCustomerOrder);
