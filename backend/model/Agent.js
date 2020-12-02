const mongoose = require('mongoose');

const agentSchema = mongoose.Schema({
    lastName: {
        type: String,
        required: true,
      },
    firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: String,
  phoneNumber: String,
  company: String
});

module.exports = Agent = mongoose.model('agent', agentSchema);