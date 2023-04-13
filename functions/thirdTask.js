'use strict'

function getMathResult(base, count) {
    if (typeof count !== 'number' || count <= 0) return base;
    let result = '';
    for (let i = 1; i <= count; i++) {
        if (i === count) {
            result += `${base * i}`
        } else {
            result += `${base * i}---`;
        }
    }
    return result;
}

console.log(getMathResult(2, 2));