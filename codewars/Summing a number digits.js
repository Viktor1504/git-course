'use strict'

// function sumDigits(number) {
//     let str = Math.abs(number).toString().split('');
//     let result = 0;
//     for (let i = 0; i < str.length; i++) {
//         result += Number(str[i]);
//     }
//     return result;
// }

function sumDigits(number) {
    let result = 0;
    Math.abs(number).toString().split('').forEach(e => {
        result += Number(e);
    });

    return result;
}

console.log(sumDigits(-343));
