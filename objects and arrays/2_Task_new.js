'use strict'

const students = ['Peter', 'Andrew', 'Ann', 'Pavel', 'Victor', 'Artem'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const fullArr = []
    for (let i = 0; i < arr.length; i += 3) {
        if (i + 2 < arr.length) {
            fullArr.push([arr[i], arr[i + 1], arr[i + 2]]);
        } else {
            fullArr.push('Оставшиеся студенты: ' + arr.slice(i).join(', '));
        }
    }
    arr.length % 3 === 0 ? fullArr.push('Оставшиеся студенты: -') : null;
    return fullArr;
}

console.log(sortStudentsByGroups(students));