'use strict'

function tripleTrouble(one, two, three){
    let result = '';
    let minLength = Math.min(one.length, two.length, three.length);
    for (let i = 0; i < minLength; i++) {
        result += one.charAt(i) + two.charAt(i) + three.charAt(i);
    }
    return result;
}

console.log(tripleTrouble("aaa","bbb", "ccc"));