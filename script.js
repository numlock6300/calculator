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
let dot = false;

let output = document.querySelector("#output");
let clear = document.querySelector("#clear");
let numbers = Array.from(document.querySelectorAll(".number"));
let operators = Array.from(document.querySelectorAll(".operator"));
let dotButton = document.querySelector("#dot");
let backspace = document.querySelector("#backspace");


document.addEventListener("keydown", function(e){
    let keyBoardButton = document.querySelector(`button[data-key="${e.key}"]`);
    if(!keyBoardButton){return}
    if(parseInt(keyBoardButton.textContent) >=0 && parseInt(keyBoardButton.textContent) <=9){
        inputNumbers(keyBoardButton);
    }
    else if(keyBoardButton.id === "backspace"){deleteElement()}
    else{inputOperator(keyBoardButton)}
});

function deleteElement(){
    if(output.textContent.length > 0)
    {
        inputValue = output.textContent.slice(0,-1)
        output.textContent = inputValue;
    }
}

function inputNumbers(number){
    if(ravno){
        inputValue = "";
        firstValue = "";
        ravno = false;
    }
    if(number.innerText === "."){
        dotButton.disabled = true;
    };
    console.log(number.innerText)
    inputValue += number.innerText;
    output.textContent =  inputValue;
}

function inputOperator(operator){
    dotButton.disabled = false;
    if(operator.textContent === "="){
        secondValue = parseFloat(inputValue);
        firstValue = operate(firstValue, secondValue, operand);
        inputValue = firstValue;
        operand = "";
        ravno = true;
    }
    else if(operator.textContent !== "=" && firstValue.length !== 0){
        if(operand.length !== 0){
            secondValue = parseFloat(inputValue);
            inputValue = "";
            firstValue = operate(firstValue, secondValue, operand);
            operand = operator.textContent;
        }
        ravno = false;
        operand = operator.textContent;
        inputValue = "";
    }
    else{
        firstValue = parseFloat(inputValue);
        inputValue = "";
        operand = operator.textContent;
        ravno = false;
    }
}

backspace.addEventListener("click", deleteElement);



let inputValue = "";
let ravno = false;
clear.addEventListener("click", () => {
    inputValue = "";
    output.textContent="0";
    firstValue = "";
    secondValue = "";
    operand = "";
});

numbers.forEach(number => number.addEventListener("click", () => inputNumbers(number)));

operators.forEach(operator => operator.addEventListener("click", () => inputOperator(operator)))