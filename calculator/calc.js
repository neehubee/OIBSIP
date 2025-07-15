const display = document.getElementById('display');
//Display function
function clearDisplay() {
    display.value = '';
}
//Delete button
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    const operators = ['+', '-', '*', '/'];
    const lastChar = display.value.slice(-1);

   //To prevent multiple operators
    if (operators.includes(lastChar) && operators.includes(value)) {
        return;
    }

    display.value += value;
}
// Result button
function calculateResult() {
    try {
        const expression = display.value;

        // Check for division by zero
        if (/\/0(?!\d)/.test(expression)) {
            alert("Error: Division by zero");
            return;
        }

        const result = eval(expression);

        if (result === Infinity || isNaN(result)) {
            alert("Invalid calculation");
            return;
        }

        display.value = result;
    } catch (error) {
        alert("Invalid expression");
    }
}