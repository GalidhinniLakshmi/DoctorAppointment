document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("appointmentForm");

    if (form) {

        form.addEventListener("submit", async function (e) {

            e.preventDefault();

            const appointment = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                doctor: document.getElementById("doctor").value,
                date: document.getElementById("date").value,
                time: document.getElementById("time").value
            };

            try {

                const response = await fetch("http://localhost:5000/appointment", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(appointment)
                });

                const data = await response.json();

                document.getElementById("message").innerHTML = data.message;

                form.reset();

            } catch (error) {

                document.getElementById("message").innerHTML =
                    "❌ Unable to connect to server.";

            }

        });

    }

});