const operations = {
  add: (first, second) => first + second,
  subtract: (first, second) => first - second,
  multiply: (first, second) => first * second,
  divide: (first, second) => first / second,
}

function calc(operater, first, second){
  return operations[operater](first, second);
}