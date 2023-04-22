'use strict'

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== 'string') return 'Ошибка!';
    let arrSplit = str.split('');
    arrSplit.reverse();
    return arrSplit.join('');
}

console.log(reverse(someString));