'use strict'

function getTimeFromMinutes(num) {
    if (typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
        return 'Ошибка, проверьте данные';
    }
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    if (hours === 0) {
        return `Это ${hours} часов и ${minutes} минут`;
    }
    if (hours % 10 === 1) {
        return `Это ${hours} час и ${minutes} минут`;
    } else if (hours % 10 >= 2 && hours % 10 <= 4) {
        return `Это ${hours} часа и ${minutes} минут`;
    } else {
        return `Это ${hours} чаcов и ${minutes} минут`;
    }
}

console.log(getTimeFromMinutes(1260));