// Q2. Multi-Type Data Summary
// Store sample values of different JavaScript data types and report each value and type.

const userName = "Alex";
const accountBalance = 1250.75;
const isActive = true;
const favoriteColors = ["blue", "green", "black"];
const userProfile = { id: 101, role: "student" };
const middleName = null;
let optionalNickname;

const entries = [
    { label: "userName", value: userName, type: typeof userName },
    { label: "accountBalance", value: accountBalance, type: typeof accountBalance },
    { label: "isActive", value: isActive, type: typeof isActive },
    { label: "favoriteColors", value: JSON.stringify(favoriteColors), type: Array.isArray(favoriteColors) ? "array" : typeof favoriteColors },
    { label: "userProfile", value: JSON.stringify(userProfile), type: typeof userProfile },
    { label: "middleName", value: middleName, type: middleName === null ? "null" : typeof middleName },
    { label: "optionalNickname", value: String(optionalNickname), type: typeof optionalNickname }
];

// One console.table() statement displays the formatted report.
console.table(entries);
