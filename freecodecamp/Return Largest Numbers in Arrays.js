'use strict';

function largestOfFour(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(Math.max.apply(null, arr[i]));
    }
    return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
