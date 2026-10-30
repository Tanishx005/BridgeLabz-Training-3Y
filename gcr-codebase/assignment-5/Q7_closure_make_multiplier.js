// Q7: A closure remembers variables from its outer function.

function makeMultiplier(multiplier) {
    // The returned function retains access to `multiplier`.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log(triple(5)); // 15
console.log(double(5)); // 10

// Closure explanation:
// makeMultiplier() has finished executing, but each returned function
// still remembers the multiplier value from the call that created it.
