// Q1. Scope Conflict Resolver
// The bonus is global, while salary and isPermanent are local to calculateSalary().

let bonus = 5000;

function calculateSalary(isPermanent) {
    let salary = 40000;

    // Only permanent employees receive the bonus.
    if (isPermanent === true) {
        salary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ₹${salary}`);

    // Changing the local parameter does not change the global bonus.
    const originalGlobalBonus = bonus;
    isPermanent = !isPermanent;
    console.log(`After toggling local isPermanent: ${isPermanent}`);
    console.log(`Global bonus remains: ₹${bonus}`);
    console.log(`Global bonus unchanged: ${bonus === originalGlobalBonus}`);
}

calculateSalary(true);
calculateSalary(false);

// The global variable can still be accessed outside the function.
console.log(`Global bonus outside function: ₹${bonus}`);
