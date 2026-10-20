// Q10. Citizen Eligibility Validator
// Change these sample values to test different age and citizenship cases.

const age = 19;
const isCitizen = true;

if (isCitizen) {
    if (age >= 21) {
        console.log("Eligible for all services.");
    } else if (age >= 18 && age <= 20) {
        console.log("Eligible to vote only.");
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}
