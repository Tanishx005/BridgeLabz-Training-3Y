// Q4 - Theme Switcher using setAttribute()

const themeButtons = document.querySelectorAll("[data-theme-choice]");
const themeStatus = document.getElementById("currentTheme");

function applyTheme(themeName) {
    // setAttribute is used for both the class and custom data attribute.
    document.body.setAttribute("class", `${themeName}-theme`);
    document.body.setAttribute("data-theme", themeName);
    themeStatus.textContent = `Current theme: ${themeName}`;
}

themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        applyTheme(button.dataset.themeChoice);
    });
});

// Restore a previously selected theme, or use light by default.
const savedTheme = localStorage.getItem("selectedTheme") || "light";
applyTheme(savedTheme);

themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        localStorage.setItem("selectedTheme", button.dataset.themeChoice);
    });
});
