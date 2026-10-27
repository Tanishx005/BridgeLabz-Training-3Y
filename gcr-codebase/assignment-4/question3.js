
"use strict";

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`${this.title} has been issued.`);
        } else {
            console.log(`${this.title} is already issued.`);
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(`${this.title} has been returned.`);
    }
}

const books = [
    new Book("JavaScript Basics", "Amit", "101"),
    new Book("Learn Java", "Rahul", "102"),
    new Book("Web Development", "Priya", "103", true)
];

console.log("Available Books:");

books.filter(book => !book.isIssued).forEach(book => {
    console.log(`${book.title} - ${book.author} - ${book.ISBN}`);
});

const searchISBN = "102";
const selectedBook = books.find(book => book.ISBN === searchISBN);

if (selectedBook) {
    selectedBook.issueBook();
} else {
    console.log("Book not found.");
}

console.log("Updated Available Books:");

books.filter(book => !book.isIssued).forEach(book => {
    console.log(book.title);
});