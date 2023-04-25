'use strict'

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Pavel'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const group1 = [];
    const group2 = [];
    const group3 = [];
    const str = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            group1.push(arr[i]);
        } else if (i < 6) {
            group2.push(arr[i]);
        } else if (i < 9) {
            group3.push(arr[i]);
        } else {
            str.push(arr[i]);
        }
    }
    return [group1, group2, group3, str.length > 0 ? `Оставшиеся студенты: ` + str.join(', ') : `Оставшиеся студенты: -`]
}

console.log(sortStudentsByGroups(students));
