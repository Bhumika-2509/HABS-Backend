const express = require("express");
const router = express.Router();
const SlotsController = require('../controllers/slotsController');

router.post('/createNewSlot', SlotsController.createNewSlot);
router.get("/getAllAvblSlots", SlotsController.getAllAvblSlots);

module.exports = router;