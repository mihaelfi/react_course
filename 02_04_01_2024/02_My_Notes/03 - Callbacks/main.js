// function doWork(a,b,c,){
//     const sum = a+b+c;
//     console.log(`Do Work: sum = ${sum}`);
// }


function test1() {
    f1(function doWork(a, b, c) {
        console.log("Sum=" + a + b + c);
    });
    f1(function (a, b, c) {
        console.log("Multiply=" + a * b * c);
    });
    f1((a, b, c) => {
        console.log("Multiply=" + a * b * c);
    });
}


function f1(callback) {
    console.log("Start");
    callback(10, 20, 30);
    console.log("End");
}

// --------------//

function userLocation() {
    // latitude
    // longitude
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(`User position is: ${position}`);
        console.log(`User latitude is: ${position.coords.latitude}`);
        console.log(`User longitude is: ${position.coords.longitude}`);
    });
}

function higherOrderFunction() {
    const arr = [];
    for (let index = 0; index < 100; index++) {
        const num = Math.floor(Math.random() * 100);
        arr.push(num);
    }
    docWriteArray(arr);

    const evens = arr.filter((n) => { return n % 2 === 0; })

    docWriteArray(evens);

    const areAllEvents =  arr.every(x => x % 2 === 0);

    docWriteArray(areAllEvents);

    const mappedValues = arr.map(n => n**2);

    docWriteArray(mappedValues);
}

function docWriteArray(arr){

    document.write(`Array: ${arr} <br>`);
}