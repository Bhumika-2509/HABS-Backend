const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  amount: Number,
  status: { type: String, default: "Unpaid" }
}, { timestamps: true });

module.exports = mongoose.model("Billing", billingSchema);
