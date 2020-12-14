const mongoose = require("mongoose");

const annonceSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },

  img: {
    data: Buffer,
    contentType: String,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = Annonce = mongoose.model("annonce", annonceSchema);
