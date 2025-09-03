const express = require('express');
const router = express.Router();
const controller = require("../controllers/bookAptController");

router.post("/", controller.bookApt);

module.exports = router;