'use strict'

const someString = 'This is some strange string';

function reverse(str) {
    if (str.length === 0) return 'Ошибка!';
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverse(someString));