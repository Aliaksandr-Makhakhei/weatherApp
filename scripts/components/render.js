const inputCountry = document.getElementById("weather-search__country");
const inputCity = document.getElementById("weather-search__city");

export function renderWeather() {
  if ((inputCountry.value && inputCity.value) !== "") {
    inputCountry.classList.remove("weather-search__disable");
    inputCity.classList.remove("weather-search__disable");
    get(inputCountry.value, inputCity.value);
  } else if ((inputCountry.value && inputCity.value) === "") {
    inputCountry.classList.add("weather-search__disable");
    inputCity.classList.add("weather-search__disable");
  }
}