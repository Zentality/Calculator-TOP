//Global Variables
let totalValue = 0;
let currentValue = "";
let firstValue = 0;
let secondValue = 0;
let operator = "";



//Query selectors
const numberButtons = document.querySelectorAll(".numberButtons");
const operatorButtons = document.querySelectorAll(".operatorButtons");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const backButton = document.querySelector("#backSpace");

const screenCurrent = document.querySelector("#screenCurrent");
const screenTotal = document.querySelector("#screenTotal");



//Event Listeners
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentValue += button.textContent;
    screenCurrent.textContent += button.textContent;
    console.log(currentValue, firstValue, secondValue, operator);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendOperator(button.textContent);
    console.log(currentValue, firstValue, secondValue, operator);
  });
});

equalsButton.addEventListener("click", () => {
  equals();
  console.log(currentValue, firstValue, secondValue, operator)
});

clearButton.addEventListener("click", () => {
  clear();
  totalValue = 0;
  screenTotal.textContent = "";
});

backButton.addEventListener("click", () => {
  //Removes last value of currentValue string
  if (currentValue.length == 1){
    currentValue = "";
    screenCurrent.textContent = removeDigit(screenCurrent.textContent);
  } else if (currentValue.length > 1){
    currentValue = removeDigit(currentValue);
    screenCurrent.textContent = removeDigit(screenCurrent.textContent);
  }
  
  console.log(currentValue);
});



//Object containing operation functions
const operations = {
  add: (first, second) => first + second,
  subtract: (first, second) => first - second,
  multiply: (first, second) => first * second,
  divide: (first, second) => first / second,
}

function appendOperator(value){
  if (operator != ""){
    equals();
  }
  firstValue = (currentValue == "") ? 0 : parseInt(currentValue);
  // firstValue = parseInt(currentValue);
  currentValue = "";
  screenCurrent.textContent += ` ${value} `;
  switch(value){
    case "+":
      operator = "add";
      break;
    case "-":
      operator = "subtract";
      break;
    case "x":
      operator = "multiply";
      break;
    case "÷":
      operator = "divide";
      break;
  }
}

function clear(){
  screenCurrent.textContent = "";
  currentValue = 0;
  firstValue = 0;
  secondValue = 0;
  operator = "";
}

function equals(){
  if (secondValue == 0){
    secondValue = parseInt(currentValue);
  } else {
    firstValue = (currentValue == "") ? 0 : parseInt(currentValue);
    if (operator == "subtract" || operator == "divide"){
      [firstValue, secondValue] = [secondValue, firstValue];
    }
  }
  totalValue = operations[operator](firstValue,secondValue);
  screenTotal.textContent = totalValue;
  clear();
  secondValue = parseInt(totalValue);
}

function removeDigit(value){
  value = value.slice(-value, value.length - 1);
  return value;
}