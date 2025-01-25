function simpleCalculate(firstNumber, secondNumber, operation) {
    return operation(firstNumber, secondNumber)
}

const operationAddition = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber
};

const operationSubtraction = function (firstNumber, secondNumber) {
    return firstNumber - secondNumber
};

const operationMultiplication = function (firstNumber, secondNumber) {
    return firstNumber * secondNumber
};

const operationDivision = function (firstNumber, secondNumber) {
    return firstNumber / secondNumber
};

const operation = {
    addition: operationAddition,
    subtraction: operationSubtraction,
    multiplication: operationMultiplication,
    division: operationDivision,
};
let selectOperation = "multiplication";
console.log(simpleCalculate(6, 3, operation[selectOperation]));