
"use strict";

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);
    const result = document.getElementById("result");

    if (!/^[A-Za-z ]+$/.test(name)) {
        result.textContent = "Name must contain alphabets only.";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        result.textContent = "Enter a valid email.";
        return;
    }

    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        result.textContent = "Seats must be between 1 and 10.";
        return;
    }

    const booking = { name, email, seats };

    result.textContent = `Booking Successful! Name: ${booking.name}, Email: ${booking.email}, Seats: ${booking.seats}`;
});