'use strict';
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();  //TODO: not to submit the Form , preventing the Default Behaviour

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');

    if(height < 0 || isNaN(height) || height === "") {
        result.innerHTML = "Please provide valid height";
    } else if(weight < 0 || isNaN(weight) || weight === "") {
        result.innerHTML = "Please provide valid Weight";
    } else {

        // TODO: Calculating the BMI(Body Mass Index).
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);
        let tempResult = undefined;

        /*      under weight:  less than 18.6
                normal range : 18.6 and 24.9
                over weight: greater than 24.9
        * */
        if(bmi <= 18.6) {
            tempResult = ` current weight is ${bmi},You are Under Weight`
        } else if (bmi >= 18.6 && bmi <= 24.9 ) {
            tempResult = `current weight is ${bmi}, Comes under Normal weight range`;
        } else {
            tempResult = `current weight is ${bmi}, You are over weight;`
        }

        result.innerHTML = tempResult;
    }

    console.log(typeof  height);
    console.log(typeof  weight);
})