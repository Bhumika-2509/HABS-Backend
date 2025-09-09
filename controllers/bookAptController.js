const BookApt = require('../models/bookApt');

exports.bookApt = async (req, res) => {
    const apt = await new BookApt(req?.body);
    await apt.save();
    res.status(201).json(apt);
}

exports.getAllAppointments = async (req, res) => {
    const allAppointments = await BookApt.find();
    res?.json(allAppointments);
}

exports.getAptDetail = async (req, res) => {
    try {
        const aptId = req.query.aptId;

        if (!aptId) {
            return res.status(400).json({ error: 'aptId (appointment ID) is required' });
        }

        const appointment = await BookApt.findOne({ aptId })
            .populate('patientId', 'name')
            .populate('doctorId', 'name');

        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }

        res.json({
            appointmentId: appointment._id,
            patientName: appointment.patientId?.name,
            doctorName: appointment.doctorId?.name,
            slot: appointment.slot,
            appointmentDate: appointment.appointmentDate
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
