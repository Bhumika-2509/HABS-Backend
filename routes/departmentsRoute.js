const express = require("express");
const router = express.Router();
const controller = require("../controllers/departmentsController");

router.get("/", controller.getDepartments);
router.post("/", controller.addDepartment);
router.put("/:id", controller.updateDepartment);
router.patch("/:id", controller.patchDepartment);

module.exports = router;