const router = require("express").Router();
const resetPassController = require("../controller/resetPassController");

router.post("/", resetPassController.actionResetPassword);

module.exports = router;
