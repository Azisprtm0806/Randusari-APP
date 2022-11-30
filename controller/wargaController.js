const Warga = require("../model/Warga");

module.exports = {
  createNewWarga: async (req, res) => {
    const { nama, tempat, tglLahir, noHp, status } = req.body;

    const newWarga = new Warga({
      nama: nama,
      tempat: tempat,
      tglLahir: tglLahir,
      noHp: noHp,
      status: status,
    });
    newWarga
      .save()
      .then((result) => {
        res.status(201).json({
          message: "Data warga berhasil di buat!",
          data: result,
        });
      })
      .catch((err) => console.log(err));
  },
  findWarga: async (req, res) => {
    const warga = await Warga.find();
    if (!warga) {
      res.status(404).json({
        message: "Data warga tidak ada!",
        data: warga,
      });
    }

    res.status(200).json({
      message: "Data warga berhasil di panggil!",
      data: warga,
    });
  },
  findWargaById: async (req, res) => {
    const { id } = req.params;
    Warga.findOne({ _id: id })
      .then((result) => {
        res.status(200).json({
          message: "Data By ID berhasil di panggil",
          data: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  editWarga: async (req, res) => {
    const { id } = req.params;
    const { nama, tempat, tglLahir, noHp, status } = req.body;

    await Warga.findById({ _id: id })
      .then((data) => {
        data.nama = nama;
        data.tempat = tempat;
        data.tglLahir = tglLahir;
        data.noHp = noHp;
        data.status = status;

        return data.save();
      })
      .then((result) => {
        res.status(202).json({
          message: "Data warga berhasil di edit!",
          data: result,
        });
      })
      .catch((err) => console.log(err));
  },
  deleteWarga: async (req, res) => {
    const { id } = req.params;

    await Warga.findByIdAndDelete(id)
      .then((result) => {
        res.status(200).json({
          message: "Data Warga berhasil di hapus!",
          data: result,
        });
      })
      .catch((err) => console.log(err));
  },
};
