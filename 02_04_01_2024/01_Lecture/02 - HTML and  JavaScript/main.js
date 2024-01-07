function calcAverage() {
    const a = +prompt("Enter first number: ");
    const b = +prompt("Enter second number: ");
    const sum = a + b;
    const avg = sum / 2;
    alert(`Sum: ${sum}, Avg: ${avg}`);
}

function calcPower() {
    const a = +prompt("Enter a number: ");
    alert(`${a} * ${a} = ${a ** 2}`);
}

function showName() {

    const fullNameBox = document.getElementById("fullNameBox");
    const fullNameSpan = document.getElementById("fullNameSpan");
    const fullName = fullNameBox.value;
    
    fullNameBox.style.backgroundColor = "";
    if(fullName === "") {
        alert("Missing full name.");
        fullNameBox.style.backgroundColor = "red";
        return;
    }

    fullNameSpan.innerText = fullName;
    localStorage.setItem("userFullName", fullName);
}

function add() {
    const firstNumBox = document.getElementById("firstNumBox");
    const secondNumBox = document.getElementById("secondNumBox");
    const sumSpan = document.getElementById("sumSpan");

    firstNumBox.style.backgroundColor = "";
    secondNumBox.style.backgroundColor = "";

    if(firstNumBox.value === "") {
        alert("Missing first number.");
        firstNumBox.style.backgroundColor = "red";
        firstNumBox.focus();
        return;
    }

    if(secondNumBox.value === "") {
        alert("Missing second number.");
        secondNumBox.style.backgroundColor = "red";
        secondNumBox.focus();
        return;
    }

    const n1 = +firstNumBox.value;
    const n2 = +secondNumBox.value;

    const sum = n1 + n2;
    sumSpan.innerText = sum;

    const data = {
        num1: n1,
        num2: n2
    };

    const json = JSON.stringify(data);
    localStorage.setItem("numbers", json);
}


function loadStorage() {
    const fullNameBox = document.getElementById("fullNameBox");
    const firstNumBox = document.getElementById("firstNumBox");
    const secondNumBox = document.getElementById("secondNumBox");
    
    const fullName = localStorage.getItem("userFullName");
    fullNameBox.value = fullName;

    const json = localStorage.getItem("numbers");
    const data = JSON.parse(json);
    firstNumBox.value = data.num1;
    secondNumBox.value = data.num2;
}

loadStorage();






