const express = require("express");
const router = express.Router();
const controller = require("../controllers/doctorsController");

router.get("/", controller.getDoctors);
router.post("/", controller.addDoctor);
router.put("/:id", controller.updateDoctor);
router.patch("/:id", controller.patchDoctor);

module.exports = router;
