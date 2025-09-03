const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: String,
  experience: Number
}, { timestamps: true });

module.exports = mongoose.model("Doctor", doctorSchema);