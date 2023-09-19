'use strict'

//triangle in console
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    result += ' '.repeat(lines - i) + '*'.repeat(2 * i + 1) + '\n';
}

console.log(result);

// Место для первой задачи
function sayHello(name) {
    return 'Привет, ' + name + '!';
}

console.log(sayHello('Victor'))

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(a, b) {
    if (typeof b !== 'number' || b <= 0) {
        return a;
    }

    let result = a;
    for (let i = 1; i < b; i++) {
        result += '---' + (a * (i + 1));
    }
    return result;
}

console.log(getMathResult(5, 8));