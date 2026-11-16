// Q9 - Form Submit Blocker with preventDefault() and Live Errors

const registrationForm = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("successMessage");

const formFields = [
    { input: nameInput, error: document.getElementById("nameError") },
    { input: emailInput, error: document.getElementById("emailError") },
    { input: passwordInput, error: document.getElementById("passwordError") }
];

function validateField(input) {
    const value = input.value.trim();

    if (input === nameInput && !value) {
        return "Name is required.";
    }

    if (input === emailInput) {
        if (!value) return "Email is required.";
        if (!value.includes("@")) return "Email must contain @.";
    }

    if (input === passwordInput && value.length < 6) {
        return "Password must be at least 6 characters.";
    }

    return "";
}

// Validate all fields on submit and prevent the browser's default submission.
registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let formIsValid = true;

    formFields.forEach(({ input, error }) => {
        const errorMessage = validateField(input);
        error.textContent = errorMessage;

        if (errorMessage) formIsValid = false;
    });

    if (formIsValid) {
        successMessage.textContent = "Form Submitted Successfully";
        registrationForm.reset();
        formFields.forEach(({ error }) => {
            error.textContent = "";
        });
    } else {
        successMessage.textContent = "";
    }
});

// Revalidate a field as the user types so its error disappears when corrected.
formFields.forEach(({ input, error }) => {
    input.addEventListener("input", () => {
        error.textContent = validateField(input);
        successMessage.textContent = "";
    });
});
