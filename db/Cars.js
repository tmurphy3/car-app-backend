const mongoose = require("./connection");

const Cars = mongoose.Schema({
  url: String,
  region: String,
  price: String,
  year: String,
  manufacturer: String,
  model: String,
  condition: String,
  cylinders: String,
  fuel: String,
  odometer: String,
  transmission: String,
  vin: String,
  drive: String,
  size: String,
  type: String,
  paint_color: String,
  image_url: String,
  description: String,
  county: String,
  state: String,
});

module.exports = mongoose.model("Cars", Cars);
