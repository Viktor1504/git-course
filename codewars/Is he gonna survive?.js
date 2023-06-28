'use strict'

function hero(bullets, dragons){
    return bullets / dragons >= 2 ? true : false;
}

console.log(hero(2,6))