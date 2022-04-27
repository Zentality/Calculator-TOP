//Global Variables
let totalValue = "";
let currentValue = "";
let firstValue = 0;
let secondValue = 0;
let operator = "";



//Query selectors
const numberButtons = document.querySelectorAll(".numberButtons");
const operatorButtons = document.querySelectorAll(".operatorButtons")
const screenCurrent = document.querySelector("#screenCurrent");



//Event Listeners
numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => appendCurrent(button.textContent));
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => appendOperator(button.textContent))
});



//Object containing operation functions
const operations = {
  add: (first, second) => first + second,
  subtract: (first, second) => first - second,
  multiply: (first, second) => first * second,
  divide: (first, second) => first / second,
}



//Functions
function appendCurrent(value){
  currentValue += value;
  screenCurrent.textContent = currentValue;
}

function appendOperator(value){
  firstValue = parseInt(currentValue);
  currentValue = "";
  screenCurrent.textContent = "";
  switch(value){
    case "+":
      operator = "add";
    case "-":
      operator = "subtract";
    case "x":
      operator = "multiply";
    case "÷":
    operator = "divide";
  }
}

function calc(operater, first, second){
  return operations[operater](first, second);
}

