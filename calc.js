function calc() {
    let numberOne = document.getElementById("firstNumber").value;
    let numberTwo = document.getElementById("secondNumber").value;
    let operator = document.getElementById("operator").value;
    let result;

    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);
    
    switch(operator) {
        case '+':
            result = numberOne + numberTwo;
            break;
        case '-':
            result = numberOne - numberTwo;
            break;
        case '*':
            result = numberOne * numberTwo;
            break;
        case '/':
            result = numberOne / numberTwo;
            break;
        default:
            result = "Invalid operator";
    }

    document.getElementById("answer").value = result;
}
