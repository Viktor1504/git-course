 'use strict'

 let myArray = [1, 2, 3, 7, 5];
 let arraySum = myArray.reduce((previous, current) => {
     return previous + current;
 }, 0);
 console.log(`Sum of array values is: ${arraySum}`);