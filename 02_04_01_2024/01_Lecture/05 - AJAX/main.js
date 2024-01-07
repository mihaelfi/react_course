// function displayJoke() {
//     const url = "https://api.chucknorris.io/jokes/random";
//     fetch(url)
//         .then(response => {
//             response.json()
//                 .then(json => {
//                     console.log(json);
//                 })
//                 .catch(err => alert(err.message));
//         })
//         .catch(err => alert(err.message));
// }

async function displayJoke() {
    try {
        const url = "https://api.chucknorris.io/jokes/random";
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.value);
    }
    catch (err) {
        alert(err.message);
    }
}

async function showWeather() {
    try {
        const cityBox = document.getElementById("cityBox");
        const weatherParagraph = document.getElementById("weatherParagraph");
        const weatherImage = document.getElementById("weatherImage");
        const city = cityBox.value;
        const url = "http://api.weatherapi.com/v1/current.json?key=31d063ce9c564d9d831133455230512&q=" + city;
        const response = await fetch(url);
        const json = await response.json();
        weatherParagraph.innerHTML = json.current.condition.text;
        weatherImage.src = json.current.condition.icon;
    }
    catch(err) {
        alert(err.message);
    }
}