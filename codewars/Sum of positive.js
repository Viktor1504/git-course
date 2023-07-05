'use strict'

function positiveSum(arr) {
    let result = 0;
    for (let e of arr) {
        if (e > 0) {
            result += e;
        }
    }
    return result;
}

console.log(positiveSum([]));