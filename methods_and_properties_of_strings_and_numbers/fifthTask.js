'use strict'

function findMaxNumber(num1, num2, num3, num4) {
    let arr = [num1, num2, num3, num4];
    let arrMax = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr < 4 || typeof (arr[i]) != 'number') return 0;

        if (arrMax < arr[i]) {
            arrMax = arr[i];
        }
    }
    return arrMax;
}

console.log(findMaxNumber(8, 6, 1, 10));