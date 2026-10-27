
"use strict";

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

const showScore = () => {
    console.log(score);
};

showScore();