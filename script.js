//initialize variables
let number2 = '';
let number1 = '';
let operator = '';
let userNumber1 =  '';
let userNumber2 = '';

// functions for operators
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function operate() {
  if (operator === '+') {
    return add(userNumber1, userNumber2);
  } else if(operator === '-'){
    return subtract(userNumber1, userNumber2);
  } else if(operator === '*') {
    return multiply(userNumber1, userNumber2);
  } else if (operator === '/') {
    return division(userNumber1, userNumber2);
  }
}
