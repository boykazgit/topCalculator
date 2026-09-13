//initialize variables
let number1 = ''; 
let number2 = '';
let operator = '';
let userNumber1 =  '';
let userNumber2 = '';
let tempNum = document.createTextNode('');
let tempOpr = '';
let oprOperate = 0; // keep track of whether the operator was used to operate instead of the equal button
let eqlButnOperate = 0;

const numbersContainer = document.querySelector('.numbers-container');
const operatorsContainer = document.querySelector('.operators-container');
const numbersDisplay = document.querySelector('.numbers-display');
const operatorDisplay = document.querySelector('.operator-display');
// '=' is not a valid css selector so it needs to be escaped
// in this case, it needs to be escaped twice for js and then cs 
const equalButton = document.querySelector('#\\=');
const clearButton = document.querySelector('#clear');

// functions for operators
function add(num1, num2) {
  return +num1 + +num2;
}

function subtract(num1, num2) {
  return +num1 - +num2;
}

function multiply(num1, num2) {
  return +num1 * +num2;
}

function division(num1, num2) {
  return +num1 / +num2;
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

function updateNumberDisplay(event) {
  //update number 1 only when userNumber 1 is not already assigned
  if(userNumber1 === '') {
    if(eqlButnOperate === 1) {
      eqlButnOperate = 0;
      numbersDisplay.textContent = '';
    }
    number1 = event.target.id;
    tempNum.textContent = number1;
    numbersDisplay.textContent = numbersDisplay.textContent + tempNum.textContent;
  } else {
    if (oprOperate === 1) {
      numbersDisplay.textContent = '';
    }

    number2 = event.target.id;
    tempNum.textContent = number2;
    numbersDisplay.textContent = numbersDisplay.textContent + tempNum.textContent;
  }
}

function updateOperator(event) {
  if (!(event.target.id === '=' || event.target.id === 'clear')) {
    // for when consecutive operators are cliced the last one clicked should be used
    if (numbersDisplay.textContent === '') {
      operator = event.target.id;
      if (event.target.id === '*') {
        operatorDisplay.textContent = 'x';
      } else {
        operatorDisplay.textContent = operator;
      }
      return;
    }
    
    // operate when both userNumber1 is available and an operator is clicked on 
    // the selected operator will be used to operate on the result(userNumber1) and the number the user entered (userNumber 2)
    if(userNumber1 !== '' && operator !== '') {
      tempOpr = event.target.id;
      userNumber2 = numbersDisplay.textContent;
      numbersDisplay.textContent = '';
      operatorDisplay.textContent = '';
      result = operate();
      userNumber1 = result;
      userNumber2 = '';
      operator = tempOpr;
      oprOperate = 1;
      // tempNum.textContent = result;
      numbersDisplay.textContent = result;
      return
    }

    //default behaviour
    userNumber1 = numbersDisplay.textContent;
    numbersDisplay.textContent = '';
    operator = event.target.id;
    if (event.target.id === '*') {
      operatorDisplay.textContent = 'x';
    } else {
      operatorDisplay.textContent = operator;
    }
  } 
}

function startOperate() {
  if (userNumber1 !== '' && numbersDisplay.textContent !== '' && operator !== '') {
      userNumber2 = numbersDisplay.textContent;
      numbersDisplay.textContent = '';
      operatorDisplay.textContent = '';
      result = operate();
      eqlButnOperate = 1;
      operator = '';
      userNumber1 = '';
      userNumber2 = '';
      tempNum.textContent = result;
      numbersDisplay.textContent = result;
  } 
}

function clear() {
  number1 = ''; 
  number2 = '';
  operator = '';
  userNumber1 =  '';
  userNumber2 = '';
  numbersDisplay.textContent = '';
  operatorDisplay.textContent = '';
}

numbersContainer.addEventListener('click', updateNumberDisplay);
operatorsContainer.addEventListener('click', updateOperator);
equalButton.addEventListener('click', startOperate);
clearButton.addEventListener('click', clear);