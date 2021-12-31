const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;
const Joigoose = require('joigoose')(mongoose);

const joiCategoryScheme = Joi.object({
  name: Joi.string(),
  desc: Joi.string(),
  image: Joi.string(),
  slug: Joi.string(),
});

const Category = new Schema(Joigoose.convert(joiCategoryScheme));

module.exports = mongoose.model('Category', Category);
