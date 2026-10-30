// Q3: Arrow functions do not have their own `this`.
// In this top-level object method, `this` is not bound to the user object.

const user = {
    name: "Alex",

    // Arrow function inherits `this` from the surrounding scope.
    showName: () => {
        console.log("Arrow function this.name:", this.name);
    }
};

user.showName(); // Usually undefined in Node.js (top-level `this` is not `user`).

// Fix: use a normal function, which receives `this` from the call site.
user.showName = function () {
    console.log("Normal function this.name:", this.name);
};

user.showName(); // Alex
