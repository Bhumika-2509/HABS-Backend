const Appointment = require("../models/appointments");

exports.getAppointments = async (req, res) => {
  const appointments = await Appointment.find().populate("patientId doctorId");
  res.json(appointments);
};

exports.addAppointment = async (req, res) => {
  const appointment = new Appointment(req.body);
  await appointment.save();
  res.status(201).json(appointment);
};

exports.updateAppointment = async (req, res) => {
  const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(appointment);
};

exports.patchAppointment = async (req, res) => {
  const appointment = await Appointment.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
  res.json(appointment);
};
