'use strict'

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        result.unshift(data[i]);
    }

    // Не трогаем
    return result;
}

console.log(thirdTask())