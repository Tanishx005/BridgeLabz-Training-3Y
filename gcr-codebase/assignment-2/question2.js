// Q2. String Manipulation Report
// Clean the product name, capitalize each word, and replace "pro" with "Pro Edition".

const productName = " wireless headphones PRO ";

// Remove whitespace and convert the title to lowercase.
const trimmedName = productName.trim().toLowerCase();

// Capitalize the first letter of each word using split(), map(), and join().
const titleCaseName = trimmedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace "Pro" with the required product label.
const cleanedTitle = titleCaseName.replace("Pro", "Pro Edition");

console.log(`Cleaned product title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
