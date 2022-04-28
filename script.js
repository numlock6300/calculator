function add(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber){
    console.log(firstNumber - secondNumber);
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber){
    console.log(firstNumber * secondNumber);
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber){
    if(secondNumber === 0){
        alert("Error Divided by zero.")
        return 0;
    }
    console.log(firstNumber / secondNumber);
    return firstNumber / secondNumber;
}

function operate(firstNumber, secondNumber, operator){
    let result = 0;
    console.log(`${firstNumber} ${secondNumber} ${operator}`);
    switch(operator){
        case "+":
            console.log("add")
            result = Math.round(add(firstNumber,secondNumber) * 1000) / 1000;
            output.textContent =  result;
            return result;
        case "-":
            console.log("subtract")
            result = Math.round(subtract(firstNumber, secondNumber)* 1000) / 1000;
             output.textContent = result;
             return result;
        case "*":
            console.log("multiply")
            result = Math.round(multiply(firstNumber,secondNumber) * 1000) / 1000;
             output.textContent = result;
             return result;
        case "/":
            console.log("divide")
            result = Math.round(divide(firstNumber, secondNumber) * 1000) / 1000;
             output.textContent = result;
             return result;
        case "":
            //console.log(firstNumber, secondNumber);
            result = firstNumber = secondNumber;
            output.textContent = firstNumber;
            ///console.log(`result is  ${result}`);
            return result;
        default:
            console.log("Error.");
    }
}

let firstValue = "";
let secondValue = "";
let operand = "";

let output = document.querySelector("#output");
let clear = document.querySelector("#clear");
let numbers = Array.from(document.querySelectorAll(".number"));
let operators = Array.from(document.querySelectorAll(".operator"));


let inputValue = "";
let ravno = false;
clear.addEventListener("click", () => {
    inputValue = "";
    output.textContent="0";
    firstValue = "";
    secondValue = "";
    operand = "";
});

numbers.forEach(number => number.addEventListener("click",function(e){
    if(ravno){
        inputValue = "";
        firstValue = "";
        ravno = false;
    }
    console.log(e.target.innerText)
    inputValue += e.target.innerText;
    output.textContent =  inputValue;
}));

operators.forEach(operator => operator.addEventListener("click",function(e){
    if(e.target.textContent === "="){
        secondValue = parseInt(inputValue);
        firstValue = operate(firstValue, secondValue, operand);
        inputValue = firstValue;
        operand = "";
        ravno = true;
    }
    else if(e.target.textContent !== "=" && firstValue.length !== 0){
        if(operand.length !== 0){
            secondValue = parseInt(inputValue);
            inputValue = "";
            firstValue = operate(firstValue, secondValue, operand);
            operand = e.target.textContent;
        }
        ravno = false;
        operand = e.target.textContent;
        inputValue = "";
    }
    else{
        firstValue = parseInt(inputValue);
        inputValue = "";
        operand = e.target.textContent;
        ravno = false;
    }
}))