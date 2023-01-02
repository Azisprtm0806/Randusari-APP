const router = require("express").Router();
const authController = require("../controller/authController");

router.post("/", authController.authUser);

module.exports = router;
