const mongoose = require('mongoose');

const bookAptSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'patients' },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'doctors' }
}, { timestamps: true });


// const bookAptSchema = new mongoose.Schema({
//   aptId: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   patientId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Patient',
//     required: true
//   },
//   doctorId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Doctor',
//     required: true
//   },
//   slot: String,
//   appointmentDate: Date
// }, { timestamps: true });

module.exports = mongoose.model('BookApt', bookAptSchema);                                           