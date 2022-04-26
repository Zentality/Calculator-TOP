function multiply(){
  total = 1;
  for (let i = 0; i < arguments.length; i++){
    total *= arguments[i];
  }
  return total;
}

function subtract(first, second){
  return first - second;
}

function add(){
  total = 0;
  for (let i = 0; i < arguments.length; i++){
    total += arguments[i];
  }
  return total;
}

function divide(first, second){
  return first / second;
}