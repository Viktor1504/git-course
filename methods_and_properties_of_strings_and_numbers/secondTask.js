'use strict'

function calculateVolumeAndArea(a) {
    const v = a * a * a;
    const s = 6 * (a * a);
    return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
}

console.log(calculateVolumeAndArea(15));