
"use strict";

let limit = 5;

if (typeof prompt === "function") {
    let userInput = prompt("Enter pyramid height:", "5");
    let parsedLimit = Number(userInput);

    if (userInput !== null && Number.isInteger(parsedLimit) && parsedLimit > 0) {
        limit = parsedLimit;
    }
}

for (let i = 1; i <= limit; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern.trim());
}