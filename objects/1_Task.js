'use strict'

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            java: '5%',
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(myPlan) {
        const {age} = myPlan;
        const {languages} = myPlan.skills;
        const stringLanguages = languages.join(' ').toUpperCase();
        return console.log(`Мне ${age} и я владею языками: ${stringLanguages}`);
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    return console.log(exp);
}

function showProgrammingLangs(plan) {
    const {programmingLangs} = plan.skills;
    let strResult = '';
    for (let key in programmingLangs) {
        strResult += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return console.log(strResult);
}

showExperience(personalPlanPeter);

showProgrammingLangs(personalPlanPeter);