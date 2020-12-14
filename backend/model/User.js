const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  lastName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  email: String,
  password: { type: String, required: true },
  phoneNumber: String,
  role: {
    type: Number,
    default: 0,
  },
});

module.exports = User = mongoose.model("user", userSchema);
