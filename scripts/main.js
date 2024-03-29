let answer = "";
let currentOperation = "";

function numberPressed(number) {
  currentOperation += number;
  document.getElementById('display').value = currentOperation;
}

function operatorPressed(operator) {
  if(currentOperation[0] == '*' || currentOperation[0] == '/' || eval(currentOperation) == "Infinity") {
    document.getElementById('display').value = "E";
  } else if(operator === '=') {
    currentOperation = (currentOperation? currentOperation:"0");
    document.getElementById('display').value = eval(currentOperation);
    if(currentOperation != "0") answer = eval(currentOperation);
    currentOperation = "";
  } else if(operator == "Ans") {
    currentOperation += answer;
    document.getElementById('display').value = answer;
  } else {
    currentOperation += operator;
    document.getElementById('display').value = currentOperation;
  }
}

function clearPressed() {
  currentOperation = "";
  document.getElementById('display').value = "0";
}

function deletePressed() {
  currentOperation = currentOperation.slice(0, -1);
  document.getElementById('display').value = currentOperation;
}
