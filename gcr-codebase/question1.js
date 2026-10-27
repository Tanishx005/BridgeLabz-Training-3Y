
"use strict";

const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let value of apiData) {
    let numberValue = Number(value);
    let booleanValue = Boolean(value);
    let stringValue = String(value);

    let isInvalid = Number.isNaN(numberValue) ||
        (typeof value === "string" && value.trim() === "") ||
        (typeof value === "string" && value.trim() === "100px");

    if (isInvalid) {
        invalidNumbers.push(value);
    } else {
        validNumbers.push(numberValue);
    }

    console.log({
        Original: stringValue,
        Number: numberValue,
        Boolean: booleanValue,
        String: stringValue,
        Status: isInvalid ? "Invalid" : "Valid"
    });
}

console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Numeric Data:", invalidNumbers);