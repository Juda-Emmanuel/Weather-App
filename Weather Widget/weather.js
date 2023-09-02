
// Geo Location Consent
const successCallback = (position) => {
    console.log(position);
};

const errorCallback = (error) => {
    console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


// Weather API
const apiKey = "d435f4f9825f2e63c6bca034790212ae";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// Search Weather Function
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clouds") {

        weatherIcon.src = "images/clouds.svg";
    }

    else if (data.weather[0].main == "Clear") {

        weatherIcon.src = "images/clear.svg";
    }

    else if (data.weather[0].main == "Rain") {

        weatherIcon.src = "images/rain.svg";
    }

    else if (data.weather[0].main == "Drizzle") {

        weatherIcon.src = "images/drizzle.svg";
    }

    else if (data.weather[0].main == "Mist") {

        weatherIcon.src = "images/mist.svg";
    }

    else if (data.weather[0].main == "Snow") {

        weatherIcon.src = "images/snow.svg";
    }
}
searchButton.addEventListener("click", () => {

    checkWeather(searchBox.value);

})
