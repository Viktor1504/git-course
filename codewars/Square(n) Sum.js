'use strict'

function squareSum(numbers) {
    let result = 0;
    for (const number of numbers) {
        result += number * number;
    }
    return result;

}

console.log(squareSum([1, 2, 2]));