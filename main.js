// function multiply(){
//   total = 1;
//   for (let i = 0; i < arguments.length; i++){
//     total *= arguments[i];
//   }
//   return total;
// }

// function subtract(first, second){
//   return first - second;
// }

// function add(){
//   total = 0;
//   for (let i = 0; i < arguments.length; i++){
//     total += arguments[i];
//   }
//   return total;
// }

// function divide(first, second){
//   return first / second;
// }

const operations = {
  add: (first, second) => first + second,
  subtract: (first, second) => first - second,
  multiply: (first, second) => first * second,
  divide: (first, second) => first / second,
}

function calc(operater, first, second){
  return operations[operater](first, second);
}