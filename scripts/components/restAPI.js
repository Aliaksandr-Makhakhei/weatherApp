const weatherImage = document.querySelector(".weather-image");
const weatherTemperature = document.querySelector(".weather-temperature");
const weatherDescription = document.querySelector(".weather-description");
const weatherLocation = document.querySelector(".weather-location");
const weatherFeelslike = document.querySelector(".weather-feelslike_degrees");
const weatherHumidity = document.querySelector(".weather-humidity_interest");

export function get(country, city) {
  fetch(`http://api.weatherstack.com/current?access_key=7fda5e62ef0821475268fb2da16fe851&query=${country},${city}`)
    .then((res) => res.json())
    .then((res) => {
      weatherImage.innerHTML = `<img src="${res.current.weather_icons[0]}" alt="weather-image">`;
      weatherTemperature.innerHTML = res.current.temperature + "&deg;";
      weatherDescription.textContent = res.current.weather_descriptions[0];
      weatherLocation.textContent = `${res.location.country}, ${res.location.name}`;
      weatherFeelslike.innerHTML = res.current.feelslike + "&deg";
      weatherHumidity.innerHTML = res.current.humidity + "%";
    })
    .catch((err) => alert("Введите корректные данные"));
}