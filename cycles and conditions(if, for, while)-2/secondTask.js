'use strict'

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === "number") {
            data[i] *= 2;
        } else if (typeof(data[i]) === "string") {
            data[i] += ' - done';
        }
    }

    // Не трогаем
    return data;
}

console.log(secondTask())