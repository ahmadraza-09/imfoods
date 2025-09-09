const express = require("express");
const router = express.Router();
const authController = require("../controllers/AuthController");

router.get("/getalladmin", authController.getAllAdmin);
router.get("/getsingleadmin/:id", authController.getSingleAdmin);
router.delete("/deleteadmin/:id", authController.deleteAdmin);
router.put("/updateadmin/:id", authController.updateAdmin);
router.post("/login", authController.login);
router.post("/register", authController.register);

module.exports = router;