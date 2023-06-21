'use strict';

function quickCheck(arr, elem) {
   return  arr.indexOf(elem) >= 0;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));