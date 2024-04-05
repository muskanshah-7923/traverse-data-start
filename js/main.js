// ANALYZER DATA START CODE

// Load Data From Files
let surveyData = await loadTextFile("data/survey-results.txt");
let ageData = await loadTextFile("data/age-data.txt");
let numberData = await loadTextFile("data/number-data.txt");

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection

  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions

function traverseSurveyData() {
  let yes = [];
  let no = [];
  let maybe = [];

  for (let i = 0; i < surveyData.length; i++) {
    if (surveyData[i] === "Yes") {
      yes++;
    } else if (surveyData[i] === "No") {
      no++;
    } else {
      maybe++;
    }
  }
  outputEl.innerHTML = `Survey Data:
  <p> Yes: ${yes} </p>
  <p> No: ${no} </p>
  <p> Maybe: ${maybe} <p/>`;
  console.log(surveyData);
}

function traverseAgeData() {
  let var1 = [];
  let var2 = [];
  let var3 = [];
  let var4 = [];
  for (let i = 0; i < ageData.length; i++) {
    if (ageData[i] < 18) {
      var1.push(ageData[i]);
    } else if (18 <= ageData[i] <= 35) {
      var2.push(ageData[i]);
    } else if (36 <= ageData[i] <= 65) {
      var3.push(ageData[i]);
    } else {
      var4.push(ageData[i]);
    }
  }

  // Traverse the ageData array to:
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.

  outputEl.innerHTML = `Age Data
  <p> Under 18: ${var1}</p>
  <p> 18 - 35: ${var2}</p>
  <p> 36 - 65: ${var3}</p>
  <p> Above 65: ${var4}</p>`;

  console.log(ageData);
}

function traverseNumberData() {
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.

  outputEl.innerHTML = "Number Data";
  console.log(numberData);
}
