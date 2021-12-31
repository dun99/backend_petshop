const mongoose = require('mongoose');
const joi = require('joi');
const Schema = mongoose.Schema;
const joigoose = require('joigoose')(mongoose);

const joiProductScheme = joi.object({
  name: joi.string(),
  price: joi.number(),
  image: joi.string(),
  freeShipping: joi.boolean(),
  desc: joi.string(),
  category: joi.string().meta({
    _mongoose: { type: 'ObjectId', ref: 'Category' },
  }),
  quantity: joi.number(),
  imageGallery: joi.array().items(joi.string()),
  status: joi.string().valid('In stock', 'Out of stock'),
  createAt: joi.date().default(Date.now()),
});

const Product = new Schema(joigoose.convert(joiProductScheme));
Product.index({ name: 'text' });

module.exports = mongoose.model('Product', Product);
