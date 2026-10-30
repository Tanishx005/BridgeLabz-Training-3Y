// Q8: Add a custom myMap() method to all arrays.
// This implementation returns a new array and does not change the original.

Array.prototype.myMap = function (callback, thisArg) {
    if (typeof callback !== "function") {
        throw new TypeError("myMap callback must be a function");
    }

    const result = [];

    for (let index = 0; index < this.length; index++) {
        // Match map(): skip empty slots in sparse arrays.
        if (index in this) {
            result[index] = callback.call(
                thisArg,
                this[index],
                index,
                this
            );
        }
    }

    return result;
};

const numbers = [1, 2, 3];

const doubledNumbers = numbers.myMap(function (number) {
    return number * 2;
});

console.log("Original:", numbers);
console.log("myMap result:", doubledNumbers); // [2, 4, 6]
