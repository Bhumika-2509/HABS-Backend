const NewSlot = require('../models/slots');

exports.getAllAvblSlots = async (req, res) => {
    const allSlots = await NewSlot.find();
    res.json(allSlots);
}

exports.createNewSlot = async (req, res) => {
    const newSlot = new NewSlot(req.body);
    newSlot.save();
    res.status(201).json(newSlot);
}