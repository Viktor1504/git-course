'use strict';

let difficultSpelling = "Mississippi";
let myRegex = /i+/gi; // Change this line
let result = difficultSpelling.match(myRegex);

console.log(result);