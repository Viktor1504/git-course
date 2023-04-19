'use strict'

function getTimeFromMinutes(num) {
    if (typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
        return 'Ошибка, проверьте данные';
    }
    let remainder = num % 10;
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    if (remainder === 1) {
        return `Это ${hours} час и ${minutes} минут`;
    } else if (remainder >= 2 && remainder <= 4) {
        return `Это ${hours} часа и ${minutes} минут`;
    } else {
        return `Это ${hours} чаcов и ${minutes} минут`;
    }
}

console.log(getTimeFromMinutes(2));