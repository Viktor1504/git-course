 'use strict'

 let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
 let waldoRegex = /Waldo|is/; // Change this line
 let result = waldoRegex.test(waldoIsHiding);

 console.log(result);