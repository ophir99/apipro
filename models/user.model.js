const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: "String", unique: true },
  password: String,
  profile: {}
});

const model = mongoose.model("users_pro", userSchema);

module.exports = model;
