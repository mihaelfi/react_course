function test1() {

    let randomNum
    try {
        randomNum = getRandomNumber(10, 100);
    } catch (err) {
        console.log("Got Error " + err);
    }
    console.log(`Random number is: ${randomNum}`);

}

//Sync function
function getRandomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Num = ${num}`);
    if (num > 50) {
        throw new Error(`Error, num is larger than 50`);
    }
    return num;
}

//Async functions 

function test2() {
    getRandomNumberAfterDelay(0, 100, (result) => {
        console.log(`test2 callback result = ${result}`);
    }, (num) => {
        console.log(`test2 operation failed! Result is less than 50 (${num})`);
    });

}

//Async function
function getRandomNumberAfterDelay(min, max, successCallback, errorCallback) {
    setTimeout(() => {
        let num;
        let error = false;
        try {
            num = getRandomNumber(min, max);
        } catch {

            errorCallback(num);
            error = true;
        }
        if (!error) {

            successCallback(num);
        }
    }, 300);

}
// promise
function test3() {
    const myPromise = getRandomNumberAfterDelay2(10, 100);
    myPromise.then(result => console.log(`test 3 result: ${result}`));
    myPromise.catch(err => console.log(`Test 3 error: ${err}`));

}

function getRandomNumberAfterDelay2(min,max) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num;
            let error = false;
            try {
                num = getRandomNumber(min, max);
            } catch {
                reject("Fail!");
                error = true;
            }
            if (!error) {
                resolve(num);
            }
        }, 300);
    })


}


async function test4(){

    try{
        const x = await getRandomNumberAfterDelay2(0,100);
        console.log(result);
    }
    catch(err){
        alert(err.message);
    }
}