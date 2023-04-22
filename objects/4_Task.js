'use strict'

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== 'string') return 'Ошибка!';
    return str.split('').reverse().join('');
}

console.log(reverse(someString));