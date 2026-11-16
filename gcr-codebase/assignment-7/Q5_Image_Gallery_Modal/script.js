// Q5 - Image Gallery with Modal Preview

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const modalImage = document.getElementById("modalImage");
const closeModalButton = document.getElementById("closeModal");

gallery.addEventListener("click", (event) => {
    if (event.target.tagName !== "IMG") return;

    // Use the clicked image's source for the larger preview.
    modalImage.src = event.target.src.replace("/300/200", "/1000/700");
    modalImage.alt = event.target.alt;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
});

function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    modalImage.src = "";
}

// Clicking the overlay (outside the content) closes the modal.
modal.addEventListener("click", closeModal);

// Prevent clicks inside the modal content from reaching the overlay.
modalContent.addEventListener("click", (event) => {
    event.stopPropagation();
});

closeModalButton.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
});
