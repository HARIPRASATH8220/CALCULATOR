let display = document.getElementById('display');
let currentOperation = '';
let firstOperand = '';
let secondOperand = '';

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
  firstOperand = '';
  secondOperand = '';
  currentOperation = '';
}

function operation(operator) {
  firstOperand = display.value;
  currentOperation = operator;
  display.value = '';
}

function calculateResult() {
  secondOperand = display.value;
  let result;
  switch (currentOperation) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case '/':
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      result = 'Error';
  }
  display.value = result;
}
