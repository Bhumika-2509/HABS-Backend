const express = require("express");
const router = express.Router();
const controller = require("../controllers/billingController");

router.get("/", controller.getBills);
router.post("/", controller.addBill);
router.put("/:id", controller.updateBill);
router.patch("/:id", controller.patchBill);

module.exports = router;
