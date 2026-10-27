
"use strict";

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        const container = document.getElementById("formContainer");
        let html = '<form id="dynamicForm">';

        this.fields.forEach(field => {
            html += `<label>${field.label}</label><br>`;
            html += `<input type="${field.type}" name="${field.name}" required><br><br>`;
        });

        html += '<button type="submit">Submit</button></form>';
        html += '<pre id="formResult"></pre>';

        container.innerHTML = html;

        document.getElementById("dynamicForm").addEventListener("submit", event => {
            event.preventDefault();
            document.getElementById("formResult").textContent =
                JSON.stringify(this.getFormData(), null, 2);
        });
    }

    getFormData() {
        const form = document.getElementById("dynamicForm");
        return Object.fromEntries(new FormData(form).entries());
    }
}

const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

const formBuilder = new FormBuilder(fields);
formBuilder.createForm();