'use strict'

let i = 2;
while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}