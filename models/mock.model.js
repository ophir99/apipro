const mongoose = require("mongoose");
const schema = mongoose.Schema;

const mockSchema = new schema({
  text: { type: String },
  title: { type: String },
  date: { type: String }
});

const model = mongoose.model("tweets", mockSchema);

module.exports = model;
