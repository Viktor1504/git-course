'use strict';

let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).*(\sRoosevelt)/;;
let result = myRegex.test(myString);

console.log(result)