var num1 = '';  
var num2 = '';  
var currentOperation = '';
var isSecondOperand = false;

const button0 = document.querySelector('#button0');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const button7 = document.querySelector('#button7');
const button8 = document.querySelector('#button8');
const button9 = document.querySelector('#button9');
const buttonAdd = document.querySelector('#buttonAdd');
const buttonSub = document.querySelector('#buttonSub');
const buttonMulti = document.querySelector('#buttonMulti');
const buttonDiv = document.querySelector('#buttonDiv');
const buttonPoint = document.querySelector('#buttonPoint');
const buttonEquals = document.querySelector('#buttonEquals');
const buttonClear = document.querySelector('#buttonClear'); // Assuming you have a clear button
const output = document.querySelector('#output');

button0.addEventListener('click', () => handleNumberClick('0'));
button1.addEventListener('click', () => handleNumberClick('1'));
button2.addEventListener('click', () => handleNumberClick('2'));
button3.addEventListener('click', () => handleNumberClick('3'));
button4.addEventListener('click', () => handleNumberClick('4'));
button5.addEventListener('click', () => handleNumberClick('5'));
button6.addEventListener('click', () => handleNumberClick('6'));
button7.addEventListener('click', () => handleNumberClick('7'));
button8.addEventListener('click', () => handleNumberClick('8'));
button9.addEventListener('click', () => handleNumberClick('9'));

buttonPoint.addEventListener('click', handlePointClick);

buttonAdd.addEventListener('click', () => handleOperation('+'));
buttonSub.addEventListener('click', () => handleOperation('-'));
buttonMulti.addEventListener('click', () => handleOperation('*'));
buttonDiv.addEventListener('click', () => handleOperation('/'));

buttonEquals.addEventListener('click', calculate);

buttonClear.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    currentOperation = '';
    isSecondOperand = false;
    updateDisplay();
});

function updateDisplay() {
    if (isSecondOperand) {
        output.textContent = `${num1} ${currentOperation} ${num2}`;
    } else {
        output.textContent = num1 || '0';
    }
}

function handleNumberClick(value) {
    if (isSecondOperand) {
        num2 += value;
    } else {
        num1 += value;
    }
    updateDisplay();
}

function handlePointClick() {
    if (isSecondOperand) {
        if (!num2.includes('.')) {
            num2 += '.';
        }
    } else {
        if (!num1.includes('.')) {
            num1 += '.';
        }
    }
    updateDisplay();
}

function handleOperation(operation) {
    if (num1 && !isSecondOperand) {
        currentOperation = operation;
        isSecondOperand = true;
        updateDisplay();
    } else if (num1 && isSecondOperand) {
        calculate();
        currentOperation = operation;
        isSecondOperand = true;
    }
}

function calculate() {
    if (num1 === '' || (isSecondOperand && num2 === '')) {
        return; 
    }
    
    let result;
    const operand1 = parseFloat(num1);
    const operand2 = parseFloat(num2);

    if (currentOperation === '+') {
        result = operand1 + operand2;
    } else if (currentOperation === '-') {
        result = operand1 - operand2;
    } else if (currentOperation === '*') {
        result = operand1 * operand2;
    } else if (currentOperation === '/') {
        result = operand1 / operand2;
    }    

    if (!isFinite(result)) {
        result = 'Error'; 
    }

    num1 = result.toString();
    num2 = '';
    currentOperation = '';
    isSecondOperand = false;
    updateDisplay();
}
