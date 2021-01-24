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
pressureValue.innerHTML = response.data.main.pressure;
iconIdValue = response.data.weather[0].id;
iconNight = response.data.weather[0].icon;

if ( iconIdValue < 233 ) {
let iconIdValue = document.querySelector("#icon");
iconIdValue.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/606/606806.svg`);
}
if ( iconIdValue > 299 && iconIdValue <= 311 ) {
let iconIdValue = document.querySelector("#icon");
iconIdValue.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/606/606801.svg`);
}
if ( iconIdValue > 311 && iconIdValue < 322) {
let iconIdValue = document.querySelector("#icon");
iconIdValue.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/606/606801.svg`);
}
if ( iconIdValue > 499 && iconIdValue < 532 ) {
let iconIdValue = document.querySelector("#icon");
iconIdValue.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/606/606803.svg`);
}
if ( iconIdValue > 599 && iconIdValue < 623 ) {
let iconIdValue = document.querySelector("#icon");
iconIdValue.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/2530/2530005.svg`);
}
if ( iconIdValue > 699 && iconIdValue < 782 ) {
let iconIdValue = document.querySelector("#icon");
iconIdValue.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/727/727890.svg`);
}
if ( iconIdValue === 801  || iconIdValue === 802) {
let iconIdValue = document.querySelector("#icon");
iconIdValue.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/606/606800.svg`);
}
if ( iconIdValue === 803) {
let iconIdValue = document.querySelector("#icon");
iconIdValue.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/606/606796.svg`);
}
if ( iconIdValue === 804) {
let iconIdValue = document.querySelector("#icon");
iconIdValue.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/606/606796.svg`);
}
if ( iconIdValue === 800 ) {
let iconIdValue = document.querySelector("#icon");
iconIdValue.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/606/606795.svg`);
}
if ( iconNight === "01n" && iconIdValue === 800){
let iconIdValue = document.querySelector("#icon");
iconIdValue.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/606/606807.svg`);
}
if ( iconNight === "02n" && iconIdValue === 801){
let iconIdValue = document.querySelector("#icon");
iconIdValue.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/3778/3778748.svg`);
}
if ( iconNight === "03n" && iconIdValue === 802){
let iconIdValue = document.querySelector("#icon");
iconIdValue.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/3778/3778748.svg`);
}
if ( iconNight === "04n" && iconIdValue === 803){
let iconIdValue = document.querySelector("#icon");
iconIdValue.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/865/865780.svg`);
}
if ( iconNight === "04n" && iconIdValue === 804){
let iconIdValue = document.querySelector("#icon");
iconIdValue.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/865/865780.svg`);
}

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
  iconIdValueUpdated = response.data.weather[0].id;
  iconNight = response.data.weather[0].icon;

if ( iconIdValueUpdated === 800 ) {
let iconIdValueUpdated = document.querySelector("#icon");
iconIdValueUpdated.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/606/606795.svg`);
}
if ( iconIdValueUpdated < 233 ) {
let iconIdValueUpdated = document.querySelector("#icon");
iconIdValueUpdated.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/606/606806.svg`);
}
if ( iconIdValueUpdated > 299 && iconIdValueUpdated <= 311 ) {
let iconIdValueUpdated = document.querySelector("#icon");
iconIdValueUpdated.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/606/606801.svg`);
}
if ( iconIdValueUpdated > 311 &&  iconIdValueUpdated < 322) {
let iconIdValueUpdated = document.querySelector("#icon");
iconIdValueUpdated.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/606/606801.svg`);
}
if ( iconIdValueUpdated > 499 && iconIdValueUpdated < 532 ) {
let iconIdValueUpdated = document.querySelector("#icon");
iconIdValueUpdated.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/606/606803.svg`);
}
if ( iconIdValueUpdated > 599 && iconIdValueUpdated < 623 ) {
let iconIdValueUpdated = document.querySelector("#icon");
iconIdValueUpdated.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/2530/2530005.svg`);
}
if ( iconIdValueUpdated > 699 && iconIdValueUpdated < 782 ) {
let iconIdValueUpdated = document.querySelector("#icon");
iconIdValueUpdated.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/727/727890.svg`);
}
if ( iconIdValueUpdated === 801  || iconIdValueUpdated === 802) {
let iconIdValueUpdated = document.querySelector("#icon");
iconIdValueUpdated.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/606/606800.svg`);
}
if ( iconIdValueUpdated === 803) {
let iconIdValueUpdated = document.querySelector("#icon");
iconIdValueUpdated.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/606/606796.svg`);
}
if ( iconIdValueUpdated === 804) {
let iconIdValueUpdated = document.querySelector("#icon");
iconIdValueUpdated.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/606/606796.svg`);
}
if ( iconNight === "01n" && iconIdValueUpdated === 800){
let iconIdValueUpdated = document.querySelector("#icon");
iconIdValueUpdated.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/606/606807.svg`);
}
if ( iconNight === "02n" && iconIdValueUpdated === 801){
let iconIdValueUpdated = document.querySelector("#icon");
iconIdValueUpdated.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/3778/3778748.svg`);
}
if ( iconNight === "03n" && iconIdValueUpdated === 802){
let iconIdValueUpdated = document.querySelector("#icon");
iconIdValueUpdated.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/3778/3778748.svg`);
}
if ( iconNight === "04n" && iconIdValueUpdated === 803){
let iconIdValueUpdated = document.querySelector("#icon");
iconIdValueUpdated.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/865/865780.svg`);
}
if ( iconNight === "04n" && iconIdValueUpdated === 804){
let iconIdValueUpdated = document.querySelector("#icon");
iconIdValueUpdated.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/865/865780.svg`);
}

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
    iconIdValueCurrent = response.data.weather[0].id;
    iconNight = response.data.weather[0].icon;

if ( iconIdValueCurrent === 800 ) {
let iconIdValueCurrent = document.querySelector("#icon");
iconIdValueCurrent.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/606/606795.svg`);
}
if ( iconIdValueCurrent < 233 ) {
let iconIdValueCurrent = document.querySelector("#icon");
iconIdValueCurrent.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/606/606806.svg`);
}
if ( iconIdValueCurrent > 299 && iconIdValueCurrent <= 311 ) {
let iconIdValueCurrent = document.querySelector("#icon");
iconIdValueCurrent.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/606/606801.svg`);
}
if ( iconIdValueCurrent > 311 && iconIdValueCurrent < 322) {
let iconIdValueCurrent = document.querySelector("#icon");
iconIdValueCurrent.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/606/606801.svg`);
}
if ( iconIdValueCurrent > 499 && iconIdValueCurrent < 532 ) {
let iconIdValueCurrent = document.querySelector("#icon");
iconIdValueCurrent.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/606/606803.svg`);
}
if ( iconIdValueCurrent > 599 && iconIdValueCurrent < 623 ) {
let iconIdValueCurrent = document.querySelector("#icon");
iconIdValueCurrent.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/2530/2530005.svg`);
}
if ( iconIdValueCurrent > 699 && iconIdValueCurrent < 782 ) {
let iconIdValueCurrent = document.querySelector("#icon");
iconIdValueCurrent.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/727/727890.svg`);
}
if ( iconIdValueCurrent === 801  || iconIdValueCurrent === 802) {
let iconIdValueCurrent = document.querySelector("#icon");
iconIdValueCurrent.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/606/606800.svg`);
}
if ( iconIdValueCurrent === 803) {
let iconIdValueCurrent = document.querySelector("#icon");
iconIdValueCurrent.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/606/606796.svg`);
}
if ( iconIdValueCurrent === 804) {
let iconIdValueCurrent = document.querySelector("#icon");
iconIdValueCurrent.setAttribute ("src", `https://www.flaticon.com/premium-icon/icons/svg/606/606796.svg`);
}
if ( iconNight === "01n" && iconIdValueCurrent === 800){
  let iconIdValueCurrent = document.querySelector("#icon");
iconIdValueCurrent.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/606/606807.svg`);
}
if ( iconNight === "02n" && iconIdValueCurrent === 801){
let iconIdValueCurrent = document.querySelector("#icon");
iconIdValueCurrent.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/3778/3778748.svg`);
}
if ( iconNight === "03n" && iconIdValueCurrent === 802){
let iconIdValueCurrent = document.querySelector("#icon");
iconIdValueCurrent.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/3778/3778748.svg`);
}
if ( iconNight === "04n" && iconIdValueCurrent === 803){
let iconIdValueCurrent = document.querySelector("#icon");
iconIdValueCurrent.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/865/865780.svg`);
}
if ( iconNight === "04n" && iconIdValueCurrent === 804){
let iconIdValueCurrent = document.querySelector("#icon");
iconIdValueCurrent.setAttribute ("src", `https://www.flaticon.com/svg/static/icons/svg/865/865780.svg`);
}

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


