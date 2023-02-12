const mongoose = require("mongoose");

const KasSchema = new mongoose.Schema({
  jenisKas: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
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
