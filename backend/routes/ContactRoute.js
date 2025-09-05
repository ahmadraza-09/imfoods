const express = require("express");
const router = express.Router();
const contactController = require("../controllers/ContactController");

router.get("/getallcontacts", contactController.getAllContacts);
router.get("/getsinglecontact/:id", contactController.getSingleContact);
router.post("/addcontact", contactController.addContact);
router.delete("/deletecontact/:id", contactController.deleteContact);
router.put("/updatecontact/:id", contactController.updateContact);


module.exports = router;