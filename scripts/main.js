let answer = "";
let currentOperation = "";

function numberPressed(number) {
  currentOperation += number;
  document.getElementById('display').value = currentOperation;
}

function operatorPressed(operator) {
  if(currentOperation[0] == '*' || currentOperation[0] == '/' || eval(currentOperation) == "Infinity") {
    document.getElementById('display').value = "E";
  }
  else if(operator === '=') {
    if(answer == eval(currentOperation)) document.getElementById('display').value = "0";
    else {
      currentOperation = eval(currentOperation ? currentOperation:"0");
      document.getElementById('display').value = eval(currentOperation);
      answer = eval(currentOperation);
      currentOperation = "";
    }
  } else if(operator == "Ans") {
    document.getElementById('display').value = answer;
    currentOperation += answer;
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
