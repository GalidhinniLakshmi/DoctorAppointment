const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Doctor Appointment Backend is Running...");
});

// Book Appointment API
app.post("/appointment", (req, res) => {

    const appointment = req.body;

    let appointments = [];

    if (fs.existsSync("appointments.json")) {
        appointments = JSON.parse(fs.readFileSync("appointments.json"));
    }

    appointments.push(appointment);

    fs.writeFileSync(
        "appointments.json",
        JSON.stringify(appointments, null, 2)
    );

    res.json({
        success: true,
        message: "Appointment Booked Successfully!"
    });

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});