'use strict';

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (const ownPropsKey in canary) {
    if (canary.hasOwnProperty(ownPropsKey)) ownProps.push(ownPropsKey);
}

