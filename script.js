const display = document.getElementById('display');
let expression = '';

// update fuction
function updateDisplay(value) {
  display.value = value;
}

// clear function 
function clearAll() {
  expression = '';
  updateDisplay('0');
}

// Function for decimal buttons
function onNumberClick(num) {
  expression += num;
  updateDisplay(expression);
}

// Function for operator button
function onOperatorClick(op) {

  if (expression === '') return;

  expression += op;
  updateDisplay(expression);
}

// fuction for equal button
function onEqualsClick() {
  if (expression === '') return;
  try {
    const result = eval(expression);  
    updateDisplay(result);
    expression = result.toString();
  } catch (err) {
    updateDisplay('Error');
    expression = '';
  }
}


document.getElementById('clear').addEventListener('click', () => clearAll());
document.getElementById('equals').addEventListener('click', () => onEqualsClick());


document.querySelectorAll('button[data-num]').forEach(button => {
  button.addEventListener('click', () => onNumberClick(button.dataset.num));
});


document.querySelectorAll('button[data-op]').forEach(button => {
  button.addEventListener('click', () => onOperatorClick(button.dataset.op));
});

clearAll();