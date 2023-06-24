'use strict'

function findAverage(array) {
    if (array.length > 0) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }
    return 0;
}

console.log(findAverage([1,5,6]));