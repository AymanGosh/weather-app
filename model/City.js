const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weatherAppSchema = new Schema({
  name: String,
  temperature: String,
  condition: String,
  conditionPic: String,
});

const City = mongoose.model("city", weatherAppSchema);
module.exports = City;
