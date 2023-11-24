let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#weather");
  temperatureElement.innerHTML = response.data.temperature.current;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city-name");
  let apiKey = "a2ft6b2f4980fb5816664553c2ofa3c0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  let city = searchInputElement.value;

  axios.get(apiUrl).then(displayTemperature);
  cityElement.innerHTML = city;
}

let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", search);

let dayNow = document.querySelector("#day-now");
let currentTime = new Date();
let minutes = currentTime.getMinutes();
let hours = currentTime.getHours();
let day = currentTime.getDay();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let formattedDay = days[day];

dayNow.innerHTML = `${formattedDay} ${hours}:${minutes}`;
