/*-------------------------
SCHEELS Developer Test
Author: Victoria Neustel
Date: 08/21/2023
-------------------------*/

const minValue = 1;
const maxValue = 100;
const firstTerm = 'SCHEELS'; //term used for remainder of 3
const secondTerm = '.COM'; //term used for remainder of 5

/* Generate the remainder results */
function generateResults() {
    const resultList = document.getElementById("list");
    const instructions = document.getElementById("instructions");

    instructions.innerHTML = `Results for each integer in the range of <b>${minValue} to ${maxValue} </b>. <br /> If the value is <b style="color:#da1a32"> highlighted </b>, the integer is either a multiple of 3 (<b style="color:#da1a32">${firstTerm}</b>), 5 (<b style="color:#da1a32">${secondTerm}</b>), or both (<b style="color:#da1a32">${firstTerm + secondTerm}</b>). `;

    let data = [];

    for (let i = minValue; i <= maxValue; i++) {

        let result = (
            i % 3 === 0 //testing remainder of 3
                ? firstTerm
                : '')
            + (i % 5 === 0 //testing remainder of 5
                ? secondTerm
                : '')
            || i.toString(); //return string of integer if result is an empty string still

        (result.includes(firstTerm) || result.includes(secondTerm)
            ? data.push(`<b style="color:#da1a32;"> ${result} </b>`) //highlighted result
            : data.push(result)
        )
    }

    //setting list innerHTML to results
    resultList.innerHTML = data.join('<br />');

    document.getElementById('results-button').disabled = true;
    document.getElementById('reset-button').disabled = false;

}

/*Resetting the HTML element results */
function resetResults() {
    const resultList = document.getElementById("list");
    const instructions = document.getElementById("instructions");

    resultList.innerHTML = ""; //resetting list element to empty string
    instructions.innerHTML = `Please click on the <b> Run </b> button to see data.`; //removing and replacing results with instructions

    document.getElementById('results-button').disabled = false;
    document.getElementById('reset-button').disabled = true;

}