
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let validTransactions = [];
let invalidTransactions = [];

for (let transaction of transactions) {
    try {
        if (transaction === null) {
            throw new Error("Null transaction");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new Error("Missing amount or id");
        }

        if (transaction.amount < 0) {
            throw new Error("Negative amount");
        }

        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id} is valid`);
    } catch (error) {
        invalidTransactions.push({
            transaction: transaction,
            reason: error.message
        });

        console.log(`Invalid Transaction: ${error.message}`);
    }
}

console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);
console.log(`Successful: ${validTransactions.length}`);
console.log(`Failed: ${invalidTransactions.length}`);