// Q1. Personalized Login Greeting
// Choose a sample user name and get the current hour from the system clock.

const userName = "Alex";
const currentHour = new Date().getHours();

let greeting;

if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour <= 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

console.log(greeting);
