const Patient = require("../models/patients");

exports.getPatients = async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
};

exports.addPatient = async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.status(201).json(patient);
};

exports.updatePatient = async (req, res) => {
  const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(patient);
};

// complete modify
exports.patchPatient = async (req, res) => {
  const patient = await Patient.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
  res.json(patient);
};
