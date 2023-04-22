'use strict'

const someString = 'This is some strange string';

function reverse(str) {
    let newStr = '';
    if (typeof str !== 'string') return 'Ошибка!';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverse(someString));