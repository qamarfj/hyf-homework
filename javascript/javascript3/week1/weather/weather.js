//display information if postion is already saved
window.addEventListener("load", () => {
  const url = localStorage.getItem("url");
  if (url) fetchWeatherData(url);
});

const btnLocation = document.getElementById("btn-location");
const cityName = document.getElementById("city");
const displayData = document.getElementById("display-data");
const btnCity = document.getElementById("btn-city");

//by user location button pressed
btnLocation.addEventListener("click", weatherByLocation);
///  weather by user location
function weatherByLocation() {
  getGeoLocation().then((position) => {
    // @ts-ignore
    url = `http://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lng}&appid=0a6a72ea9485bcb13dcd85eefa701ef7`;
    // @ts-ignore
    if (document.getElementById("save-loc").checked === true)
      // @ts-ignore
      localStorage.setItem("url", url);
    // @ts-ignore
    fetchWeatherData(url);
  });
}

//by city name
btnCity.addEventListener("click", weatherByCity);
//weather by city name
function weatherByCity() {
  // @ts-ignore
  if (cityName.value !== "") {
    // @ts-ignore
    const city = cityName.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0a6a72ea9485bcb13dcd85eefa701ef7`;
    // @ts-ignore
    cityName.value = "";
    // @ts-ignore
    if (document.getElementById("save-loc").checked === true)
      localStorage.setItem("url", url);
    fetchWeatherData(url);
  } else {
    console.log("Nothing to show");
  }
}

//fetch weather data from openweathermap.org
/**
 * @param {RequestInfo} url
 */
function fetchWeatherData(url) {
  //
  fetch(url)
    .then((response) => response.json())
    .then((weatherData) => {
      render(weatherData);
    });
}
//render data to html
function render(weatherData) {
  document.getElementById("loc-city").textContent = weatherData.name;
  const imgsrc = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  document.getElementById("icon").src = imgsrc;
  const tempInCelsius = (parseFloat(weatherData.main.temp) - 273.15).toFixed(2);
  document.getElementById("temp-cel").textContent = tempInCelsius;

  document.getElementById("wind-speed").textContent = weatherData.wind.speed;
  document.getElementById("clouds-per").textContent = weatherData.clouds.all;
  const sunrise = gethumanreadbleTime(weatherData.sys.sunrise);
  document.getElementById("sunrise-time").textContent = sunrise;
  const sunset = gethumanreadbleTime(weatherData.sys.sunset);
  document.getElementById("sunset-time").textContent = sunset;

  const position = { lat: weatherData.coord.lat, lng: weatherData.coord.lon };
  rendermap(position);
}
// convert time in human readable form
/**
 *credit
 *: https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
 */
function gethumanreadbleTime(timeInSeconds) {
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  const date = new Date(timeInSeconds * 1000);
  // Hours part from the timestamp
  const hours = date.getHours();
  // Minutes part from the timestamp
  const minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  const seconds = "0" + date.getSeconds();
  // Will display time in 10:30:23 format
  const formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return formattedTime;
}
//get user Geolocation
function getGeoLocation() {
  return new Promise(function (resolve) {
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      position = { lat: latitude, lng: longitude };

      resolve(position);
    }

    function error() {
      console.log("Unable to retrieve your location");
    }

    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      console.log("Locating…");
      navigator.geolocation.getCurrentPosition(success, error);
    }
  });
}
//render google map with user position
/**
 * @param {{ lat: any; lng: any; }} position
 */
function rendermap(position) {
  let map;

  initMap();
  function initMap() {
    // @ts-ignore
    map = new google.maps.Map(document.getElementById("map"), {
      center: position,
      zoom: 16,
    });
    // @ts-ignore
    const marker = new google.maps.Marker({
      position: position,
      map: map,
    });
  }
}
