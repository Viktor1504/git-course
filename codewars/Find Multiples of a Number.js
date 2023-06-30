'use strict'

function findMultiples(integer, limit) {
    let arr = [];
    for (let i = integer; i <= limit; i += integer) {
        arr.push(i);
    }
    return arr
}

console.log(findMultiples(2, 6));