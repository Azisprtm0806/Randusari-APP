const router = require("express").Router();
const forgotPass = require("../controller/forgotPassController");

router.post("/", forgotPass.forgotPasswordAction);

module.exports = router;
