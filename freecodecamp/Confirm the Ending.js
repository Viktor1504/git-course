'use strict';

function confirmEnding(str, target) {
    return str.slice(-target.length) === target;
}

console.log(confirmEnding("Bastian", "fan"));
