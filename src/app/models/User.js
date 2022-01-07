const mongoose = require('mongoose');
const joi = require('joi');
const Schema = mongoose.Schema;
const joigoose = require('joigoose')(mongoose);

const joiUserScheme = joi.object({
  _id: joi.string(),
  name: joi.string(),
  avatar: joi.string(),
  email: joi.string().email(),
  phone: joi.string(),
  createAt: joi.date(),
  role: joi.string().allow('user', 'admin').default('user'),
});

const User = new Schema(joigoose.convert(joiUserScheme));
module.exports = mongoose.model('User', User);
