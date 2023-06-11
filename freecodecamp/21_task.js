 'use strict'

 let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
 let waldoRegex = /waldo/i; // Change this line   // i - игнорирование регистра
 let result = waldoRegex.test(waldoIsHiding);

 console.log(result);