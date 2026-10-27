
"use strict";

const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const fields = [
        {
            id: "name",
            errorId: "nameError",
            pattern: /^[A-Za-z]+$/,
            message: "Name must contain alphabets only."
        },
        {
            id: "email",
            errorId: "emailError",
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email."
        },
        {
            id: "phone",
            errorId: "phoneError",
            pattern: /^\d{10}$/,
            message: "Phone must contain exactly 10 digits."
        },
        {
            id: "password",
            errorId: "passwordError",
            pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
            message: "Password needs uppercase, number and special character."
        }
    ];

    let isValid = true;

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.errorId);
        const valid = field.pattern.test(input.value.trim());

        input.style.border = valid ? "2px solid green" : "2px solid red";
        error.textContent = valid ? "" : field.message;
        error.style.color = "red";

        if (!valid) {
            isValid = false;
        }
    });

    document.getElementById("message").textContent =
        isValid ? "Registration successful!" : "Please correct the errors.";
});