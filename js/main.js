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
  <p> Maybe: ${maybe} <p/>`;
  console.log(surveyData);
}

function traverseAgeData() {
  let under18 = 0;
  let teen = 0;
  let old = 0;
  let senior = 0;
  for (let i = 0; i < ageData.length; i++) {
    if (ageData[i] <= 18 === "under18") {
      under18++;
    }
  }
  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.

  outputEl.innerHTML = `Age Data
  <p> Under 18: ${under18}`;
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
