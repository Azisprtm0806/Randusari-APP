const express = require("express");
const router = express.Router();
const Kas = require("../controller/kasController");

router.post("/create", Kas.createKas);
router.get("/kas-masuk", Kas.getKasMasuk);
router.get("/kas-keluar", Kas.getKasKeluar);
router.get("/rekap-kas", Kas.getRekapKas);
router.get("/findOne/:id", Kas.getOneData);
router.get("/total-kas", Kas.rekapKas);
router.put("/edit/:id", Kas.editKas);
router.delete("/delete/:id", Kas.deleteKas);

module.exports = router;
