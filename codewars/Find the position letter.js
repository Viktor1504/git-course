'use strict'

function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}

console.log(position('b'));