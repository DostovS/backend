const { Schema, model } = require("mongoose");
const { DateTime } = require("luxon");

const User = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Object, default: DateTime.now().c },
});

module.exports = new model("user", User);
