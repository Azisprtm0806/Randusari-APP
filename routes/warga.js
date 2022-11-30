const router = require("express").Router();
const wargaController = require("../controller/wargaController");

router.post("/create", wargaController.createNewWarga);
router.get("/get", wargaController.findWarga);
router.get("/findOne/:id", wargaController.findWargaById);
router.put("/edit/:id", wargaController.editWarga);
router.delete("/delete/:id", wargaController.deleteWarga);

module.exports = router;
