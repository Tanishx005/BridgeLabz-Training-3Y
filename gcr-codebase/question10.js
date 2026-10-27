
"use strict";

function outer() {
    console.log(count);

    var count = 5;

    const inner = () => {
        console.log(count);

        var count = 10;
    };

    inner();
}

outer();