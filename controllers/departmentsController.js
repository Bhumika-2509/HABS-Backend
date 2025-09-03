const Department = require("../models/departments");

exports.getDepartments = async (req, res) => {
  const departments = await Department.find();
  res.json(departments);
};

exports.addDepartment = async (req, res) => {
  const department = new Department(req.body);
  await department.save();
  res.status(201).json(department);
};

exports.updateDepartment = async (req, res) => {
  const department = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(department);
};

exports.patchDepartment = async (req, res) => {
  const department = await Department.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
  res.json(department);
};
