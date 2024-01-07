function CalcAverage() {
    const a = +prompt("Input first number");
    const b = +prompt("Input second number");
    const ans = (a + b) / 2;
    console.log(`Average is ${ans}`);
    return ans;
}

function CalcPower() {
    const base = +prompt("input power base");
    const exponent = +prompt("input power exponent");
    const ans = Math.pow(base, exponent);
    console.log(`Power of base: ${base}, exponent:${exponent} is ${ans}`);
}


// DOM manipulation examples
function showName() {
    const inputElement = document.getElementById("fullNameBox");
    const inputElementValue = inputElement.value;
    console.log(`Full name in input element is ${inputElementValue}`);
    const spanElement = document.getElementById("fullNameSpan");
    inputElement.style.backgroundColor = "";

    if (inputElementValue === '') {
        alert("Missing Full Name.");
        inputElement.style.backgroundColor = "red";
        return;
    }

    spanElement.innerText = inputElementValue;
    localStorage.setItem("fullName", inputElementValue);
}


function loadStorage() {
    const userName = localStorage.getItem("fullName");
    console.log(`User name, loaded from storage is: ${userName}`);
    const spanElement = document.getElementById("fullNameSpan");
    console.log(`The element for fullNameSpan is: ${spanElement} `);
    spanElement.innerText = userName;
    const inputElement = document.getElementById("fullNameBox");
    inputElement.value = userName;

}

function sumNumbersFromDom(){
    const firstNumberInput = document.getElementById("firstNumberInput");
    const firstNumber = +firstNumberInput.value;
    const secondNumberInput = document.getElementById("secondNumberInput");
    const secondNumber = +secondNumberInput.value;
    const resultSpan = document.getElementById("resultSpan");
    const sum = firstNumber + secondNumber;
    resultSpan.style.backgroundColor = "";
    console.log(`Sum is ${sum}`);
    if (isNaN(sum)){
        console.log("Sum is Nan log!");
        resultSpan.innerHTML = "<h1 id='errorMessageH1'>ERROR!</h1>";
        return;
    }
    resultSpan.innerText = sum;

    const data = {
        num1: firstNumber,
        num2: secondNumber
    };
    const json = JSON.stringify(data);

    localStorage.setItem("numbers",json);
    
}


function loadNumbersFromLocalStorage(){
    const firstNumberInput = document.getElementById("firstNumberInput");
    const secondNumberInput = document.getElementById("secondNumberInput");

    const loadedJson = localStorage.getItem("numbers");

    const loadedObject = JSON.parse(loadedJson);

    firstNumberInput.value = loadedObject.num1;
    secondNumberInput.value = loadedObject.num2;

}

loadStorage();
loadNumbersFromLocalStorage();