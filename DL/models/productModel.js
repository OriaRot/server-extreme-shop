const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  id: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  rating: {
    count: { type: Number },
    rate: { type: Number },
  },
  title: {
    type: String,
    require: true,
  },
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;

