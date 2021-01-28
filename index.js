function showCurrentTime(){
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
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
h3.innerHTML = `Last updated on ${day} at ${hour}:${minute}`;
}

showCurrentTime ();

function showForecastHours(timestamp){
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours <10) {
    hours = `0${hours}`;
  }
  let minutes=date.getMinutes();
  if (minutes <10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

function showForecast(response){
  
let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = null;
let forecast = null;

for (let index=0; index<5; index ++){
forecast = response.data.list[index];
forecastElement.innerHTML +=`
                            <div class="col-2">
                            <h1>${showForecastHours(forecast.dt*1000)} </h1>
                            <img src="http://openweathermap.org/img/wn/${
          forecast.weather[0].icon
        }@2x.png" width="65"/>
                            <h6><strong>${Math.round(forecast.main.temp_max)}°</strong> / ${Math.round(forecast.main.temp_min)}°
                            </h6>
                        </div>` ;
                      }
}

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
pressureValue.innerHTML = response.data.main.pressure;
let iconElement= document.querySelector("#icon");
iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

celsiusTemperature=response.data.main.temp;
}

let apiKey = "48ddae8355adb729eaa13fbeedf0ff54";  
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=wroclaw&appid=${apiKey}&units=metric`;
let apiUrlTwo = `https://api.openweathermap.org/data/2.5/forecast?q=wroclaw&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(setHomepageValues).then(showCurrentTime);
axios.get(apiUrlTwo).then(showForecast);

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
  let iconElement= document.querySelector("#icon");
  iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

  celsiusTemperature=response.data.main.temp;

}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h2 = document.querySelector("h2");
  let cityName = `${searchInput.value}`;
  h2.innerHTML = `${searchInput.value}`;

  let apiKey = "48ddae8355adb729eaa13fbeedf0ff54";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  let apiUrlTwo = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(updateRestWeather).then(showCurrentTime);
  axios.get(apiUrlTwo).then(showForecast);
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
    let apiUrlTwo = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature2).then(showCurrentTime);
    axios.get(apiUrlTwo).then(showForecast);
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
    let iconElement= document.querySelector("#icon");
    iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    celsiusTemperature=response.data.main.temp;
  }
}

let temperatureTemplate = document.querySelector("#location");
temperatureTemplate.addEventListener ("click", updateLocation);

function displayFahrenheitTemperature(event){
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature*9)/5+32;
  temperatureElement.innerHTML=Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature (event){
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");

  let temperatureElement=document.querySelector("#temperature");
  temperatureElement.innerHTML=Math.round(celsiusTemperature);
}

let celsiusTemperature=null;

let fahrenheitLink=document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink=document.querySelector("#celsius-link");
celsiusLink.addEventListener("click",displayCelsiusTemperature);
