// Q4: Share getDetails() through Car.prototype.

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// One shared method is stored on the constructor's prototype.
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const firstCar = new Car("Toyota", "Corolla");
const secondCar = new Car("Honda", "Civic");

firstCar.getDetails();
secondCar.getDetails();

// Both objects use the exact same function from Car.prototype.
console.log(
    "Shared method:",
    firstCar.getDetails === secondCar.getDetails
); // true
