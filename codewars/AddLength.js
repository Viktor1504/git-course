'use strict'

function addLength(str) {
    let result = [];
    str.split(' ').forEach(e => {
        result.push(e + ' ' + e.length);
    });
    return result;
}

console.log(addLength('apple ban'));