/* List of buttons */
const ZERO = document.getElementById('zero');
const ONE = document.getElementById('one');
const TWO = document.getElementById('two');
const THREE = document.getElementById('three');
const FOUR = document.getElementById('four');
const FIVE = document.getElementById('five');
const SIX = document.getElementById('six');
const SEVEN = document.getElementById('seven');
const EIGHT = document.getElementById('eight');
const NINE = document.getElementById('nine');
const BACKSPACE = document.getElementById('backspace');
const CLEAR = document.getElementById('clear');
const EXPONENT = document.getElementById('exponent');
const DIVIDE = document.getElementById('division');
const MULTIPLY = document.getElementById('multiplication');
const SUBTRACT = document.getElementById('subtraction');
const ADD = document.getElementById('addition');
const EQUAL = document.getElementById('equal-sign');
const MOD = document.getElementById('mod');
const DECIMAL = document.getElementById('decimal');
/* End List of Buttons */

const buttons = document.querySelectorAll('.btn');
const RESULT_DISPLAY = document.querySelector('.result');
const INPUT_DISPLAY = document.querySelector('.input-display');

let a, b;
let operatorSign = '';
let result = 0;
let operatorFlag = 0;
let currentOperator = '';
let decimalFlag = 0;


buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        findValue(button);
    })
})

function findValue(button) {
    switch (button) {
        case ZERO:
            addToDisplay(0);
            break;
        case ONE:
            addToDisplay(1);
            break;
        case TWO:
            addToDisplay(2);
            break;
        case THREE:
            addToDisplay(3);
            break;
        case FOUR:
            addToDisplay(4);
            break;
        case FIVE:
            addToDisplay(5);
            break;
        case SIX:
            addToDisplay(6);
            break;
        case SEVEN:
            addToDisplay(7);
            break;
        case EIGHT:
            addToDisplay(8);
            break;
        case NINE:
            addToDisplay(9);
            break;
        case BACKSPACE:
            deleteDigit();
            break;
        case DIVIDE:
            operateDisplay(DIVIDE)
            break;
        case MULTIPLY:
            operateDisplay(MULTIPLY)
            break;
        case ADD:
            operateDisplay(ADD)
            break;
        case SUBTRACT:
            operateDisplay(SUBTRACT)
            break;
        case EQUAL:
            equalsDisplay();
            operateDisplay(EQUAL)
            break;
        case MOD:
            operateDisplay(MOD)
            break;
        case DECIMAL:
            decimalDisplay()
            break;
        case EXPONENT:
            operateDisplay(EXPONENT);
            break;
        case CLEAR:
            clearDisplay();
            break;
    }
}

/* Adds a and b and adds result to result display */
function addition(a, b) {
    result = parseFloat(a) + parseFloat(b);
    RESULT_DISPLAY.textContent = result;
}

/* Subtracts a and b and adds result to result display */
function subtraction(a, b) {
    result = parseFloat(a) - parseFloat(b);
    RESULT_DISPLAY.textContent = result;
}

/* Multiplies a and b and adds result to result display */
function multiplication(a, b) {
    result = parseFloat(a) * parseFloat(b);
    RESULT_DISPLAY.textContent = result;
}

/* Divides a and b and adds result to result display */
function division(a, b) {
    result = parseFloat(a) / parseFloat(b);
    RESULT_DISPLAY.textContent = result;
}

/* Gets the remainder of a and b and adds result to result display */
function modulo(a, b) {
    result = parseFloat(a) % parseFloat(b);
    RESULT_DISPLAY.textContent = result;
}

/* Gets exponent of a and b and adds result to result display */
function exponent(a, b) {
    result = Math.pow(parseFloat(a), parseFloat(b));
    RESULT_DISPLAY.textContent = result;
}

/* Sets operator sign based on which sign the user inputs */
function setOperatorSign(sign) {
    operatorSign = sign;
}

/* Adds numbers to input display */
function addToDisplay(num) {
    if (operatorFlag == 1) {
        INPUT_DISPLAY.textContent = '';
        operatorFlag = 0;
    }
    let currentValue = INPUT_DISPLAY.textContent;
    INPUT_DISPLAY.textContent = currentValue + num;
}

/* Adds operator to display  */
function operateDisplay(operator) {
    if(INPUT_DISPLAY.textContent == '=')
    {
        a = RESULT_DISPLAY.textContent;
    }
    else
    {
        a = INPUT_DISPLAY.textContent;
    }

    INPUT_DISPLAY.textContent = operator.textContent;
    operatorFlag = 1;
    decimalFlag = 0;

    switch (operator) {
        case ADD:
            currentOperator = 'add';
            break;
        case SUBTRACT:
            currentOperator = 'subtract';
            break;
        case MULTIPLY:
            currentOperator = 'multiply';
            break;
        case DIVIDE:
            currentOperator = 'divide';
            break;
        case MOD:
            currentOperator = 'modulo';
            break;
        case EXPONENT:
            currentOperator = 'exponent';
            break;
    }
}

/* Clears display */
function clearDisplay() {
    INPUT_DISPLAY.textContent = '';
    RESULT_DISPLAY.textContent = '';
    decimalFlag = 0;
    operatorFlag = 0;
}

/* Puts equal sign on input display and calls a math function based on current operator being used */
function equalsDisplay() {
    b = INPUT_DISPLAY.textContent;
    INPUT_DISPLAY.textContent = EQUAL.textContent;

    switch (currentOperator) {
        case 'add':
            addition(a, b);
            break;
        case 'subtract':
            subtraction(a, b);
            break;
        case 'divide':
            division(a, b);
            break;
        case 'multiply':
            multiplication(a, b);
            break;
        case 'modulo':
            modulo(a, b);
            break;
        case 'exponent':
            exponent(a, b);
            break;
    }
}

/* Deletes a single digit from input display */
function deleteDigit() {
    let string = INPUT_DISPLAY.textContent;
    if(string.charAt(string.length-1) == '.')
    {
        decimalFlag = 0;
    }
    string = string.substring(0, string.length - 1);
    INPUT_DISPLAY.textContent = string;
}

/* Adds decimal if there are no decimals currently being used for that number */
function decimalDisplay() {
    if(decimalFlag == 0)
    {
        let currentValue = INPUT_DISPLAY.textContent;
        INPUT_DISPLAY.textContent = currentValue + '.';
        decimalFlag = 1;
    }
}