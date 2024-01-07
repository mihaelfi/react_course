function test1() {

    f1(function doWork(a, b, c) { // Inline Function
        console.log("Sum: ", a + b + c);
    });

    f1(function (a, b, c) { // Anonymous Function
        console.log("Mul: ", a * b * c);
    });

    f1((a, b, c) => { // Lambda Expression -> Arrow Function
        console.log("Div: ", a / b / c);
    });

}

function f1(callback) {
    console.log("Start");
    callback(10, 20, 30);
    console.log("End");
}

// ----------------------------------------------

function userLocation() {
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude, position.coords.longitude);
    });
}

function higherOrderFunction() {

    const arr = [];

    for (let i = 1; i <= 100; i++) {
        const num = Math.floor(Math.random() * 100); // Math.random() --> 0.0 - 0.9999999
        arr.push(num);
    }
    document.write("Array: " + arr + "<br>");

    const evens = arr.filter(n => n % 2 === 0);
    document.write("Evens: " + evens + "<br>");

    const areAllEvens = arr.every(n => n % 2 === 0);
    document.write("Are all evens: " + areAllEvens + "<br>");

    const powers = arr.map(n => n ** 2);
    document.write("Powers: " + powers + "<br>");

    const squareRoots = arr.map((n, index) => `Index: ${index}, Sqrt: ${n ** 0.5}<br>`);
    document.write("Square Roots: " + squareRoots + "<br>");

}

