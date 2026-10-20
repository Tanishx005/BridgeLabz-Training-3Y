// Q5. Boolean Logic Access System
// Change these values to test different security outcomes.

const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

// Secure only when the alarm is on, all entry points are secured, and the owner is inside.
const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

// The negation demonstrates the opposite state.
if (isSecure && !( !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside)) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Example alternate scenario for testing:
// const alternateSecure = true && true && false && true;
// console.log(alternateSecure ? "Secure" : "Unsafe");
