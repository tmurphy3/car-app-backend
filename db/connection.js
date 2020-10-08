const mongoose = require("mongoose");
require("dotenv").config();

const connection_url = process.env.DB_URL;

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
module.exports = mongoose;
