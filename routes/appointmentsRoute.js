const express = require("express");
const router = express.Router();
const controller = require("../controllers/appointmentsController");

router.get("/", controller.getAppointments);
router.post("/", controller.addAppointment);
router.put("/:id", controller.updateAppointment);
router.patch("/:id", controller.patchAppointment);

module.exports = router;
