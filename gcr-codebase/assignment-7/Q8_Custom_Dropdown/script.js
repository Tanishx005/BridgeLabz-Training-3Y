// Q8 - Custom Dropdown using capturing phase for outside closing

const dropdown = document.querySelector(".dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");
const selectedValue = document.getElementById("selectedValue");

function closeDropdown() {
    dropdownOptions.hidden = true;
    dropdownButton.setAttribute("aria-expanded", "false");
}

dropdownButton.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdownOptions.hidden = !dropdownOptions.hidden;
    dropdownButton.setAttribute("aria-expanded", String(!dropdownOptions.hidden));
});

dropdownOptions.addEventListener("click", (event) => {
    const optionButton = event.target.closest("button[data-value]");
    if (!optionButton) return;

    dropdownButton.textContent = optionButton.dataset.value;
    selectedValue.textContent = `Selected: ${optionButton.dataset.value}`;
    closeDropdown();
});

// Capture the click before it reaches target/bubble listeners.
// Any click outside the dropdown closes the options list.
document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        closeDropdown();
    }
}, true);
