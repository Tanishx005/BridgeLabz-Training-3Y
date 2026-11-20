// Q5. Ride-Sharing Application (Classes + Inheritance + Error Handling)

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null || this.distance === "") {
            throw new Error("Trip distance must be provided.");
        }

        if (typeof this.distance !== "number" || this.distance < 0) {
            throw new Error("Trip distance must be a non-negative number.");
        }

        const ratePerKm = 12;
        const baseFare = 40;
        return baseFare + (this.distance * ratePerKm);
    }
}

const driver = new Driver("Arjun", 4.8, "Sedan", "UP85 AB 1234");
console.log(`Driver: ${driver.name}`);
console.log(`Rating: ${driver.rating}`);
console.log(`Vehicle: ${driver.vehicle} (${driver.vehicleNumber})`);

const trips = [
    new Trip("GLA University", "Mathura Junction", 12),
    new Trip("Mathura", "Agra", -5),
    new Trip("Home", "Market", undefined)
];

trips.forEach((trip, index) => {
    try {
        console.log(`Trip ${index + 1}: ${trip.fromLocation} to ${trip.toLocation}`);
        console.log(`Fare: Rs. ${trip.calculateFare()}`);
    } catch (error) {
        console.log(`Trip ${index + 1} error: ${error.message}`);
    }
});
