'use strict'

function palindrome(x) {
    return x.toLowerCase().replace(/[\W_,.]/g, '') === x.toLowerCase().split('').reverse().join('').replace(/[\W_,.]/g, '');
}

console.log(palindrome('ага'));