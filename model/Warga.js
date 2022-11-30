const mongoose = require("mongoose");

const wargaSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  tempat: {
    type: String,
    requied: true,
  },
  tglLahir: {
    type: Date,
    required: true,
  },
  noHp: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Warga", wargaSchema);
