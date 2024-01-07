// Output: 
// alert("Hi");
// document.write("Test");
// window.alert("I'm inside the window");

// Variables: 
if (true) {
    var a = 10; // Hoisting
    let b = 20;
    const c = 30;
}
let b = 20;
const c = 30;
document.write("a = " + a + "<br>");
document.write("b = " + b + "<br>");
document.write("c = " + c + "<hr>");

// Types:
let n1 = 10;
console.log(n1, typeof n1); // number V.T.

let n2 = "Hi";
console.log(n2, typeof n2); // string R.T.

let n3 = true;
console.log(n3, typeof n3); // boolean V.T.

let n4 = new Date();
console.log(n4, typeof n4); // object R.T.

let n5 = alert;
console.log(n5, typeof n5); // function R.T.

let n6;
console.log(n6, typeof n6); // undefined V.T.

// Falsy
let x = 0;
x = "";
x = null;
x = undefined;
x = false;
x = NaN;
if (x) {
    console.log(x, "is true");
}
else {
    console.log(x, "is false");
}

// Comparisons:
let val1 = 0;
let val2 = "";
if (val1 === val2) {
    console.log(val1, "equals to", val2);
}
else {
    console.log(val1, "not equal to", val2);
}

// Abstract Comparison:
console.log(0 == ""); // true (bug - never use it!)
console.log(0 != ""); // false (bug - never use it!)

// Strict Comparison:
console.log(0 === ""); // false (ok)
console.log(0 !== ""); // true (ok)

console.log("7" == 7);
console.log("7" === 7);
console.log(+"7" === 7);

// Literal Objects: 
const kitten = { name: "Mitsi", age: 4 };
console.log(kitten);
console.log(kitten.name, kitten["name"]);
console.log(kitten.age, kitten["age"]);
console.log(kitten.color, kitten["color"]);

kitten.color = "Black";
kitten["food"] = "Mice";
delete kitten.age;
console.log(kitten.age);
console.log(kitten.color);
console.log(kitten.food);

// for-in loop
for (const property in kitten) {
    console.log(property, typeof property, kitten[property]);
}

// Arrays:
const arr = [10, 20, 30, "Hi", true];
arr.push(40, 50, "Cool"); // 
console.log(arr);
console.log(arr[0], arr[7], arr[8]);
arr[8] = "Test"
console.log(arr[8]);

arr[20] = "Something";
console.log(arr[20], arr[10]);
console.log(arr);
console.log(arr.length);


const result = doSomething(10, 20, 30);
console.log(result);
const result2 = doSomething(10, 20);
console.log(result2);

// Functions
function doSomething(a, b, c=3) {
    console.log(a, b, c);
    return a + b + c;
}

function sayHi() {
    alert("Hi");
}

function displayMessage(msg) {
    alert(msg);
}

const s1 = "Hello";
const s2 = 'Hello';
const n = 123;
const s3 = `Hello ${n} something...`; // Interpolation

