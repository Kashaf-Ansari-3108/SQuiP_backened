const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },

  created_on: {
    type: Date,
    default: Date.now,
  },
});

const adminModel = mongoose.model("admin", adminSchema);
module.exports = adminModel;