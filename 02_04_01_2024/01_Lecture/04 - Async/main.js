function test1() {
    try {
        const result = getRandomNumber(10, 20);
        console.log(result);
    }
    catch (err) {
        alert(err.message);
    }
}

// Synchronous Function:
function getRandomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (Math.random() < 0.3) { // Demo for failing...
        throw new Error("Some error...");
    }
    return num;
}








// -----------------------------------------------

function test2() {
    getRandomNumberAfterDelay(10, 20, result => console.log(result), err => alert(err.message));
}

// Asynchronous Function:
function getRandomNumberAfterDelay(min, max, successCallback, errorCallback) {
    setTimeout(() => {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (Math.random() < 0.3) { // Demo for failing...
            errorCallback(new Error("Some error..."));
        }
        else {
            successCallback(num);
        }
    }, 1000);
}

// -----------------------------------------------

function test3() {
    getRandomNumberAfterDelay2(10, 20)
        .then(result => console.log(result))
        .catch(err => alert(err.message));
}

function getRandomNumberAfterDelay2(min, max) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * (max - min + 1)) + min;
            if (Math.random() < 0.3) { // Demo for failing...
                reject(new Error("Some error..."));
            }
            else {
                resolve(num);
            }
        }, 1000);
    });
}

// -----------------------------------------------

async function test4() {
    try {
        const result = await getRandomNumberAfterDelay2(10, 20);
        console.log(result);
    }
    catch (err) {
        alert(err.message);
    }
}
