const express = require("express");
const router = express.Router();
const controller = require("../controllers/patientsController");

router.get("/", controller.getPatients);
router.post("/", controller.addPatient);
router.put("/:id", controller.updatePatient);
router.patch("/:id", controller.patchPatient);

module.exports = router;
