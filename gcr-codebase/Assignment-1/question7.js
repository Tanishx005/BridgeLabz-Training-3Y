// Q7. Smart Guessing Game (Number Range)
// This version uses a sample guess. Change userGuess to test the result.

const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 27;

console.log(`Your guess: ${userGuess}`);
console.log(`Secret number: ${secretNumber}`);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}
