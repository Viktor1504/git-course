'use strict'

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const mainAtm = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) return 'Нет доступных валют';
    let str = 'Доступные валюты:\n';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === missingCurr) continue;
        str += `${arr[i]}\n`;
    }
    return str;
}

console.log(availableCurr(mainAtm, 'USD'));
