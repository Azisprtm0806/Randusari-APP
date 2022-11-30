const mongoose = require("mongoose");

const KasSchema = new mongoose.Schema({
  jenisKas: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  ket: {
    type: String,
    required: true,
  },
  jumlah: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("kasSchema", KasSchema);
