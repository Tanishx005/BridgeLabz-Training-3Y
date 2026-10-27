
"use strict";

const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const userForm = document.getElementById("userForm");
const userDetails = document.getElementById("userDetails");

function displayUser() {
    userDetails.textContent = JSON.stringify(user, null, 2);
}

displayUser();

userForm.addEventListener("submit", function(event) {
    event.preventDefault();

    user.name = document.getElementById("name").value.trim();
    user.email = document.getElementById("email").value.trim();
    user.age = Number(document.getElementById("age").value);

    displayUser();
});