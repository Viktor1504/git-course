'use strict'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    return arr.length ? 'Семья состоит из: ' + arr.join(' ') : 'Семья пуста';
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let i of arr) {
        console.log(i.toLowerCase());
    }
}

standardizeStrings(favoriteCities);
