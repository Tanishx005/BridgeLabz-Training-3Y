
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let cleanData = [];
let under18Users = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        let parsedData = JSON.parse(rawData[i]);

        if (parsedData.user === undefined || parsedData.age === undefined) {
            throw new Error("Missing user or age");
        }

        let age = Number(parsedData.age);

        if (!Number.isFinite(age)) {
            throw new Error("Invalid age");
        }

        parsedData.age = age;
        cleanData.push(parsedData);

        if (age < 18) {
            under18Users.push(parsedData);
        }

        console.log(`Line ${i + 1}: Valid JSON`);
    } catch (error) {
        console.log(`Line ${i + 1}: ${error.message}`);
    }
}

console.log("Clean Data:", cleanData);
console.log("Users Under 18:", under18Users);