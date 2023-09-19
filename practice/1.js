'use strict'

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    result += ' '.repeat(lines - i) + '*'.repeat(2 * i + 1) + '\n';
}

console.log(result);