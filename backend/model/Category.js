const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  typeCat: {
    type: String,
    required: true,
  },
  annonces: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "annonce",
  },
});

module.exports = Category = mongoose.model("category", categorySchema);
