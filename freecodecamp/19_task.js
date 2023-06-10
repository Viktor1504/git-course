'use strict'

function sumAll(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);

   // let sum = 0;

    for (let i = min; i <= max; i++) {
        min += i;
    }
    return min - 1
}

console.log(sumAll([1, 5])); // Выведет 10