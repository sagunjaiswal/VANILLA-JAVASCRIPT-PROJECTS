const iconElement = document.querySelector(".icon");
const tempElement = document.querySelector(".temperature");
const descElement = document.querySelector(".temperatureDescription");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

//for app data
const weather = {};

weather.temperature = {
    unit : "celsius"
}

const K = 273;

const key = "b2fb1bf45b19a07acbc8da9045ed10d5";

if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setposition, showError);
    }
else{//if geolocation is unavailable
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesnt support geolocation</p>";
    }

function setposition(position)//this is a call back function u can spot it on getCurrentPosition function
{
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p>${error.message}</p>`;
}

//get weather from api
function getWeather(latitude, longitude)
{
    let api =  `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    console.log(api);
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - K);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

// function getWeather(la)
function celsiusToFahrenheit(temp){
    return (temp*9/5)+32;
}
function fahreheitToKelvin(temp){
    return ((temp + 459.67) * 5/9);
}

function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML =   `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}


tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;//loaction or temperature value is not foundd then this will be executed

    if(weather.temperature.unit == "celsius"){//if the temperature is in C it will change to F after clicking
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahreheit";
    }
    else if(weather.temperature.unit == "fahreheit"){//if the temperature is in F it will change to K
        let kelvin = fahreheitToKelvin(weather.temperature.value);
        kelvin = Math.floor(kelvin);
        tempElement.innerHTML = `${kelvin}<span>K</span>`;
        weather.temperature.unit="kelvin";
    }
    else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius";
    }
});