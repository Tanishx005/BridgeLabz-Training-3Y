// Q3 - Multi-Step Form with validation

const formSteps = [...document.querySelectorAll(".form-step")];
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const summary = document.getElementById("summary");
let currentStep = 0;

const fields = [
    document.getElementById("fullName"),
    document.getElementById("email"),
    document.getElementById("password")
];

const errorElements = [
    document.getElementById("nameError"),
    document.getElementById("emailError"),
    document.getElementById("passwordError")
];

function validateCurrentStep() {
    const field = fields[currentStep];
    const value = field.value.trim();
    let errorMessage = "";

    if (!value) {
        errorMessage = "This field is required.";
    } else if (currentStep === 1 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorMessage = "Enter a valid email address.";
    } else if (currentStep === 2 && value.length < 6) {
        errorMessage = "Password must contain at least 6 characters.";
    }

    errorElements[currentStep].textContent = errorMessage;
    return errorMessage === "";
}

function showStep() {
    formSteps.forEach((step, index) => {
        step.hidden = index !== currentStep;
    });

    backButton.disabled = currentStep === 0;
    nextButton.textContent = currentStep === formSteps.length - 1 ? "Submit" : "Next";
}

nextButton.addEventListener("click", () => {
    if (!validateCurrentStep()) return;

    if (currentStep < formSteps.length - 1) {
        currentStep++;
        showStep();
    } else {
        document.getElementById("summaryName").textContent = `Name: ${fields[0].value.trim()}`;
        document.getElementById("summaryEmail").textContent = `Email: ${fields[1].value.trim()}`;
        document.getElementById("registrationForm").hidden = true;
        summary.hidden = false;
    }
});

backButton.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
});

// Clear the current step's error as the user corrects the field.
fields.forEach((field, index) => {
    field.addEventListener("input", () => {
        errorElements[index].textContent = "";
    });
});

showStep();
