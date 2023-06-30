'use strict';

function findLongestWordLength(str) {
    let newStr = str.split(' ');
    let maxLength = newStr[0];
    for (let i = 0; i < newStr.length; i++) {
        if (maxLength.length < newStr[i].length) {
            maxLength = newStr[i]
        }
    }
    return maxLength.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));