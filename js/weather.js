const API_KEY = "645bec30502b21ff6cdd34e61e735bd5";
const lat = 37.2710662;
const lon = 127.0351827;

function onWeatherCheck() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      console.log(city, weather);
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
}

onWeatherCheck();
