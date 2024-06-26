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
  let yes = 0;
  let no = 0;
  let maybe = 0;

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
  <p> Maybe: ${maybe} </p>`;
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
    } else if (ageData[i] <= 35) {
      var2.push(ageData[i]);
    } else if (ageData[i] <= 65) {
      var3.push(ageData[i]);
    } else {
      var4.push(ageData[i]);
    }
  }

  outputEl.innerHTML = `Age Data
  <p> Under 18: ${var1.length} </p>
  <p> 18 - 35: ${var2.length} </p>
  <p> 36 - 65: ${var3.length} </p>
  <p> Above 65: ${var4.length} </p>`;
  console.log(ageData);
}

function traverseNumberData() {
  let odd = 0;
  let even = 0;

  for (let i = 0; i < numberData.length; i++) {
    if (numberData[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  outputEl.innerHTML = `Number Data:
  <p> Odd: ${odd} </p>
  <p> Even: ${even} </p>`;
  console.log(numberData);
}
