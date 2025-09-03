require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Register routes
app.use("/api/patients", require("./routes/patientsRoute"));
app.use("/api/doctors", require("./routes/doctorsRoute"));
app.use("/api/appointments", require("./routes/appointmentsRoute"));
app.use("/api/departments", require("./routes/departmentsRoute"));
app.use("/api/billing", require("./routes/billingRoute"));
app.use("/api/bookApt", require("./routes/bookAptRoute"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
