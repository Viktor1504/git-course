'use strict';

function titleCase(str) {
    let arr = str.toLowerCase().split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }
    return arr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));