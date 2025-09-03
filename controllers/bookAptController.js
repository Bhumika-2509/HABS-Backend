const BookApt = require('../models/bookApt');

exports.bookApt = async(req, res) => {
    const apt = await new BookApt(req?.body);
    await apt.save();
    res.status(201).json(apt);
}