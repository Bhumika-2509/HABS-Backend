const Billing = require("../models/billing");

exports.getBills = async (req, res) => {
  const bills = await Billing.find().populate("patientId");
  res.json(bills);
};

exports.addBill = async (req, res) => {
  const bill = new Billing(req.body);
  await bill.save();
  res.status(201).json(bill);
};

exports.updateBill = async (req, res) => {
  const bill = await Billing.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(bill);
};

exports.patchBill = async (req, res) => {
  const bill = await Billing.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
  res.json(bill);
};
