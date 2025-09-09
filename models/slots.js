const mongoose = require('mongoose');

const newSlotSchema = new mongoose.Schema({
    slotTime: { type: String, required: true },
    status: { type: String, required: true, default: 'A' }
})

module.exports = mongoose.model("NewSlot", newSlotSchema);