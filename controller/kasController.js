const Kas = require("../model/Kas");

module.exports = {
  // KAS MASJID
  createKas: (req, res) => {
    const { jenisKas, ket, jumlah } = req.body;

    const newKas = new Kas({
      jenisKas: jenisKas,
      ket: ket,
      jumlah: jumlah,
      date: Date.now(),
    });
    newKas.date instanceof Date;
    newKas
      .save()
      .then((result) => {
        res.status(201).json({
          message: "Kas berhasil di buat!",
          data: result,
        });
      })
      .catch((err) => console.log(err));
  },

  getRekapKas: async (req, res) => {
    const data = await Kas.find();
    if (!data) {
      res.status(404).json({
        message: "Kas Tidak Ada!",
        data: data,
      });
    }

    res.status(200).json({
      message: "Rekap Kas",
      data: data,
    });
  },

  getKasMasuk: async (req, res) => {
    const KasMasuk = await Kas.find({ jenisKas: "Masuk" });
    if (!KasMasuk) {
      res.status(404).json({
        message: "Kas Masuk Tidak Ada!",
        data: KasMasuk,
      });
    }

    res.status(200).json({
      message: "Kas Masuk",
      data: KasMasuk,
    });
  },

  getKasKeluar: async (req, res) => {
    const KasKeluar = await Kas.find({ jenisKas: "Keluar" });
    if (!KasKeluar) {
      res.status(404).json({
        message: "Kas Keluar Tidak Ada!",
        data: KasKeluar,
      });
    }

    res.status(200).json({
      message: "Kas Keluar",
      data: KasKeluar,
    });
  },

  getOneData: async (req, res) => {
    const { id } = req.params;
    Kas.findOne({ _id: id })
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

  editKas: async (req, res) => {
    const { id } = req.params;
    const { jenisKas, ket, jumlah } = req.body;

    await Kas.findOne({ _id: id })
      .then((DataKas) => {
        DataKas.jenisKas = jenisKas;
        DataKas.ket = ket;
        DataKas.jumlah = jumlah;

        return DataKas.save();
      })
      .then((result) => {
        res.status(202).json({
          message: "Kas berhasil di edit!",
          data: result,
        });
      })
      .catch((err) => console.log(err));
  },

  deleteKas: (req, res) => {
    const { id } = req.params;

    Kas.findByIdAndDelete(id).then((dataKas) => {
      res.status(200).json({
        message: "Kas Berhasil di Hapus!",
        data: dataKas,
      });
    });
  },

  // rekapKap: async (req, res) => {
  //   const data = await Kas.aggregate([
  //     { $group: { _id: "$jenisKas", sum_val: { $sum: "$jumlah" } } },
  //   ]);

  //   // const totalKasMasuk = ;

  //   res.status(200).json({
  //     message: "Total Kas",
  //     data: totalKasMasuk,
  //     // dati: data,
  //   });
  // },
  // // END KAS MASJID
};
