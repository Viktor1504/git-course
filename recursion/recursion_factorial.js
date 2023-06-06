'use strict';
function pow(x, n) {
    return n === 1 ? x : x * pow(x, n - 1);
}

console.log(`Степень: ${pow(2, 5)}`);

function factorial(num) {
    if (!Number.isInteger(num)) return 'чет не то!'
    return num <= 0 ? 1 : num * factorial(num - 1);
}

console.log(`Факториал: ${factorial(1.2)}`);