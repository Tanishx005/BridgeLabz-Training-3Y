
"use strict";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    const errors = [];

    if (username.length < 5) {
        errors.push("Username must contain at least 5 characters.");
    }

    if (password.length < 8) {
        errors.push("Password must contain at least 8 characters.");
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain an uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain a lowercase letter.");
    }

    if (!/[0-9]/.test(password)) {
        errors.push("Password must contain a number.");
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        errors.push("Password must contain a special character.");
    }

    if (errors.length > 0) {
        message.innerHTML = errors.join("<br>");
        message.style.color = "red";
    } else {
        message.textContent = "Login validation successful!";
        message.style.color = "green";
    }
});