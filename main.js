//Global Variables
let totalValue = 0;
let currentValue = "";
let firstValue = 0;
let secondValue = 0;
let operator = "";



//Query selectors
const numberButtons = document.querySelectorAll(".numberButtons");
const operatorButtons = document.querySelectorAll(".operatorButtons");
const equalsButton = document.querySelector("#equals")
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
  secondValue = parseInt(currentValue);
  totalValue = operations[operator](firstValue,secondValue);
  screenTotal.textContent = totalValue;
  clear();
});



//Object containing operation functions
const operations = {
  add: (first, second) => first + second,
  subtract: (first, second) => first - second,
  multiply: (first, second) => first * second,
  divide: (first, second) => first / second,
}

function appendOperator(value){
  firstValue = parseInt(currentValue);
  currentValue = "";
  screenCurrent.textContent += ` ${value} `;
  console.log(value);
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
  currentValue = "";
  firstValue = 0;
  secondValue = 0;
}