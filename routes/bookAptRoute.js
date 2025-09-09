const express = require('express');
const router = express.Router();
const controller = require("../controllers/bookAptController");

router.post("/", controller.bookApt);
router.get("/getAptDetail", controller.getAptDetail);
router.get("/getAllAppointments", controller.getAllAppointments);

module.exports = router;