//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let API_KEY = "d939601cc2ecd6358402ef84c7b8b29e";

getweatherData=(city)=>{
    const URL = 'https://api.openweathermap.org/data/2.5/weather'
    const Full_url = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherPromise = fetch(Full_url);

    return weatherPromise.then((response) => {
        return response.json()
    })
}

function searchCity(){
    const city=document.getElementById("city-input").value;

    getweatherData(city)
    .then((response)=>{
        showweatherData(response)
    })
    .catch((err)=>{
        console.log(err)
    })
}

showweatherData = (weatherData) =>{
    document.getElementById('city-name').innerText = weatherData.name;
    document.getElementById('weather-type').innerText = weatherData.weather[0].main;
    document.getElementById('temp').innerText = weatherData.main.temp;
    document.getElementById('min-temp').innerText = weatherData.main.temp_min;
    document.getElementById('max-temp').innerText = weatherData.main.temp_max; 
}