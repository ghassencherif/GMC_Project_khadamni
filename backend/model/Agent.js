const mongoose = require("mongoose");

const agentSchema = mongoose.Schema({
  lastname: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  societe: {
    type: String,
  },
  role: {
    type: Number,
    default: 1,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

module.exports = Agent = mongoose.model("agent", agentSchema);
