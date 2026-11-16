// Q2 - Live Character Counter with warning and input blocking

const messageBox = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const maximumCharacters = 100;

function updateCounter() {
    const remainingCharacters = maximumCharacters - messageBox.value.length;
    counter.textContent = `${remainingCharacters} characters remaining`;

    counter.classList.toggle("warning", remainingCharacters <= 20 && remainingCharacters > 0);
    counter.classList.toggle("limit", remainingCharacters === 0);
}

// beforeinput runs before text is inserted. preventDefault blocks input
// that would take the textarea beyond the 100-character limit.
messageBox.addEventListener("beforeinput", (event) => {
    const currentLength = messageBox.value.length;
    const insertedText = event.data ?? "";

    if (event.inputType.startsWith("insert") &&
        insertedText.length > maximumCharacters - currentLength) {
        event.preventDefault();
    }
});

messageBox.addEventListener("input", updateCounter);

resetButton.addEventListener("click", () => {
    messageBox.value = "";
    updateCounter();
    messageBox.focus();
});

updateCounter();
