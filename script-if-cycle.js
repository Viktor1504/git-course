'use strict'

let result = '';
const length = 7;

for (let i = 0; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n';
}

console.log(result);

