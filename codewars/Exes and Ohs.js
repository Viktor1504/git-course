'use strict'

function XO(str) {
    let x = 0;
    let o = 0;
    str.toLowerCase().split('').forEach(e => {
        if (e === 'x') {
            x += 1;
        } else if (e === 'o') {
            o += 1;
        }
    });
    return x === o;
}

console.log(XO('axccao'));