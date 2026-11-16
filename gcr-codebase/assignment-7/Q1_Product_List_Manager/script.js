// Q1 - Dynamic Product List Manager using event delegation

const productForm = document.getElementById("productForm");
const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");
const statusMessage = document.getElementById("status");
let editingItem = null;

// Save the current inline edit, if one exists.
function saveCurrentEdit() {
    if (!editingItem) return;

    const editInput = editingItem.querySelector(".edit-input");
    const nameSpan = editingItem.querySelector(".product-name");
    const updatedName = editInput.value.trim();

    if (updatedName) {
        nameSpan.textContent = updatedName;
    }

    editInput.replaceWith(nameSpan);
    editingItem = null;
}

// Add a new product to the list.
productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveCurrentEdit();

    const productName = productInput.value.trim();
    if (!productName) return;

    const listItem = document.createElement("li");
    const nameSpan = document.createElement("span");
    nameSpan.className = "product-name";
    nameSpan.textContent = productName;

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.dataset.action = "edit";
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Delete";

    listItem.append(nameSpan, editButton, deleteButton);
    productList.appendChild(listItem);
    productInput.value = "";
    productInput.focus();
});

// One listener on the parent <ul> handles all Edit/Delete buttons.
productList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button || !productList.contains(button)) return;

    const listItem = button.closest("li");

    if (button.dataset.action === "delete") {
        if (editingItem === listItem) editingItem = null;
        listItem.remove();
        statusMessage.textContent = "Product deleted.";
        return;
    }

    if (button.dataset.action === "edit") {
        if (editingItem && editingItem !== listItem) saveCurrentEdit();
        if (editingItem === listItem) return;

        const nameSpan = listItem.querySelector(".product-name");
        const editInput = document.createElement("input");
        editInput.className = "edit-input";
        editInput.value = nameSpan.textContent;

        nameSpan.replaceWith(editInput);
        editingItem = listItem;
        editInput.focus();
        editInput.select();
    }
});

// Clicking outside the item being edited auto-saves it.
document.addEventListener("click", (event) => {
    if (editingItem && !editingItem.contains(event.target)) {
        saveCurrentEdit();
    }
});

// Enter saves the edit; Escape restores the original text.
productList.addEventListener("keydown", (event) => {
    if (!event.target.matches(".edit-input")) return;
    if (event.key === "Enter") {
        event.preventDefault();
        saveCurrentEdit();
    } else if (event.key === "Escape") {
        const listItem = editingItem;
        const nameSpan = listItem.querySelector(".product-name");
        event.target.replaceWith(nameSpan);
        editingItem = null;
    }
});
