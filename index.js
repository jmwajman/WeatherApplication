let now = new Date();
let h3 = document.querySelector("h3");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let date = now.getDate();
let months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
];
let month = months[now.getMonth()];
let year = now.getFullYear();

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}

h3.innerHTML = `Last updated on ${day} at ${hour}:${minute}`;



function setHomepageValues(response) {

let temperatureValue = document.querySelector("#temperature");
temperatureValue.innerHTML = Math.round(response.data.main.temp);

let descriptionValue = document.querySelector("p");
descriptionValue.innerHTML = response.data.weather[0].description;

let humidityValue = document.querySelector("#humidity");
humidityValue.innerHTML = response.data.main.humidity;

let windValue = document.querySelector("#wind");
windValue.innerHTML = Math.round (response.data.wind.speed);

let pressureValue = document.querySelector("#pressure");
pressureValue = reponse.data.main.pressure;
}

let apiKey = "48ddae8355adb729eaa13fbeedf0ff54";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=wroclaw&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(setHomepageValues);



function updateRestWeather(response) {
  let locationRestHumidity = document.querySelector("#humidity");
  locationRestHumidity.innerHTML = response.data.main.humidity;

  let locationRestPressure = document.querySelector("#pressure");
  locationRestPressure.innerHTML = response.data.main.pressure;

  let locationRestTemp = document.querySelector("#temperature");
  locationRestTemp.innerHTML = Math.round(response.data.main.temp);

  let locationRestWind = document.querySelector("#wind");
  locationRestWind.innerHTML = Math.round(response.data.wind.speed);

  let locationUpdatedName = document.querySelector("#city");
  locationUpdatedName.innerHTML = response.data.name;

  let descriptionUpdateName = document.querySelector("p");
  descriptionUpdateName.innerHTML = response.data.weather[0].description;
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h2 = document.querySelector("h2");
  let cityName = `${searchInput.value}`;
  h2.innerHTML = `${searchInput.value}`;

  let apiKey = "48ddae8355adb729eaa13fbeedf0ff54";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(updateRestWeather);
}

let form = document.querySelector("#look-for-place");
form.addEventListener("click", searchCity);

function updateLocation(event) {
  event.preventDefault();

  function handlePosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "48ddae8355adb729eaa13fbeedf0ff54";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showTemperature2);
  }

  navigator.geolocation.getCurrentPosition(handlePosition);

  function showTemperature2(response) {
    let locationCurrentHumidity = document.querySelector("#humidity");
    locationCurrentHumidity.innerHTML = response.data.main.humidity;

    let locationCurrentPressure = document.querySelector("#pressure");
    locationCurrentPressure.innerHTML = response.data.main.pressure;

    let locationCurrentTemp = document.querySelector("#temperature");
    locationCurrentTemp.innerHTML = Math.round(response.data.main.temp);

    let locationCurrentWind = document.querySelector("#wind");
    locationCurrentWind.innerHTML = Math.round(response.data.wind.speed);

    let updatedCity = document.querySelector("#city");
    updatedCity.innerHTML = response.data.name;

    let updatedDescription = document.querySelector("p");
    updatedDescription.innerHTML = response.data.weather[0].description;
  }
}

let temperatureTemplate = document.querySelector("#location");
temperatureTemplate.addEventListener("click", updateLocation);




function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = 6;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 10;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);


