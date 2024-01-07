const jokes_url =  'https://api.chucknorris.io/jokes/random';

async function displayJokes(){
    const response = await fetch(jokes_url);
    const json = await response.json();
    console.log(`Got json reply: ${json.value}`);
    const x = document.getElementsByTagName("span");
    x[0].innerHTML = json.value;
    
}


async function getWeather(){
    const cityNameInput = document.getElementById("cityNameInput");
    console.log(`City Name = ${cityNameInput.value}`);
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=31d063ce9c564d9d831133455230512&q=${cityNameInput.value}`;
    console.log(`URL = ${apiUrl}`);
    const response = await fetch(apiUrl);
    console.log(`Got response: ${response}`);
    const json = await response.json();
    const paragraph = document.getElementById("weatherResult");
    paragraph.innerHTML = `Temp C = ${json.current['temp_c']} Condition = ${json.current.condition.text}`;
    const img = document.getElementById("icon");
    img.src =  json.current.condition.icon;


}