let currentInput = '';
let operatorUsed = false;

function appendNumber(number) {
    if (operatorUsed && currentInput === '') {
        operatorUsed = false;
    }
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (!operatorUsed) {
        currentInput += operator;
        operatorUsed = true;
    }
    updateDisplay();
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
