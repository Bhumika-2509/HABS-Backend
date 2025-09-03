const Doctor = require("../models/doctors");

exports.getDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};

exports.addDoctor = async (req, res) => {
  console.log("req.body", req.body);
  const doctor = new Doctor(req.body);
  await doctor.save();
  res.status(201).json(doctor);
};


/** To add multiple doctors at same time */
// exports.addDoctor = async (req, res) => {
//  try {
//     const doctors = req.body;

//     if (!doctors || !Array.isArray(doctors) || doctors.length === 0) {
//       return res.status(400).json({ message: 'No doctor data provided' });
//     }

//     const savedDoctors = [];

//     for (let doctorData of doctors) {
//       if (!doctorData.name) {
//         return res.status(400).json({ message: 'Name is required for each doctor' });
//       }

//       const newDoctor = new Doctor(doctorData);
//       await newDoctor.save();
//       savedDoctors.push(newDoctor);
//     }

//     res.status(201).json(savedDoctors);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err);
//   }
// };

exports.updateDoctor = async (req, res) => {
  const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(doctor);
};

exports.patchDoctor = async (req, res) => {
  const doctor = await Doctor.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
  res.json(doctor);
};
