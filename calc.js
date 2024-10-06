//Problem no 1
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));



document.write("Addition: " + add(num1, num2) + "\n");
document.write("Subtraction: " + sub(num1, num2) + "\n");
document.write("Multiplication: " + mul(num1, num2) + "\n");
document.write("Division: " + div(num1, num2) + "\n");
