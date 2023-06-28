'use strict'

function fakeBin(x) {
    let arr = x.split('');
    let newArr = '';
    arr.forEach(e => {
        e < 5 ? newArr += '0' : newArr += '1';
    });
    return newArr;
}

console.log(fakeBin('45385593107843568'));