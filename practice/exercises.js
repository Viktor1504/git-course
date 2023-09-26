'use strict'

//triangle in console
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    result += ' '.repeat(lines - i) + '*'.repeat(2 * i + 1) + '\n';
}

console.log(result);

// Место для первой задачи
function sayHello(name) {
    return 'Привет, ' + name + '!';
}

console.log(sayHello('Victor'))

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(a, b) {
    if (typeof b !== 'number' || b <= 0) {
        return a;
    }

    let result = a;
    for (let i = 1; i < b; i++) {
        result += '---' + (a * (i + 1));
    }
    return result;
}

console.log(getMathResult(5, 8));

const logg = '12.2px';
console.log(parseInt(logg));

function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0, area = 0;

    volume = length * length * length;
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5));

function getCoupeNumber(seatNumber) {
    if (typeof seatNumber !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }
    if (seatNumber === 0 || seatNumber > 36) {
        return 'Таких мест в вагоне не существует';
    }
    return Math.ceil(seatNumber / 4);
}

console.log(getCoupeNumber(1));