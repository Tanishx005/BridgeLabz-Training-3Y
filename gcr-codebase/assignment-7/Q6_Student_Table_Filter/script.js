// Q6 - Real-Time Table Filter using the input event

const searchInput = document.getElementById("searchInput");
const studentRows = [...document.querySelectorAll("#studentRows tr")];
const noResultsMessage = document.getElementById("noResults");

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.trim().toLowerCase();
    let visibleRowCount = 0;

    studentRows.forEach((row) => {
        const rowText = row.textContent.toLowerCase();
        const matchesSearch = rowText.includes(searchText);

        row.hidden = !matchesSearch;
        if (matchesSearch) visibleRowCount++;
    });

    noResultsMessage.hidden = visibleRowCount !== 0;
});
