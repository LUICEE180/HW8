document.getElementById("operator").addEventListener("change", updateButtonText);

function updateButtonText() {
    const operator = document.getElementById("operator").value;
    const button = document.querySelector("button");
    switch(operator) {
        case '+':
            button.textContent = "Add";
            break;
        case '-':
            button.textContent = "Subtract";
            break;
        case '*':
            button.textContent = "Multiply";
            break;
        case '/':
            button.textContent = "Divide";
            break;
    }
}

function calculate() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const operator = document.getElementById("operator").value;
    let result;

    if (isNaN(number1) || isNaN(number2)) {
        result = "Please enter valid numbers.";
    } else {
        switch(operator) {
            case '+':
                result = add(number1, number2);
                break;
            case '-':
                result = subtract(number1, number2);
                break;
            case '*':
                result = multiply(number1, number2);
                break;
            case '/':
                result = divide(number1, number2);
                break;
            default:
                result = "Invalid operation.";
        }
    }

    if (typeof result === "number") {
        result = result.toFixed(2);
    }

    document.getElementById("result").textContent = "Result = " + result;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero.";
    }
    return num1 / num2;
}