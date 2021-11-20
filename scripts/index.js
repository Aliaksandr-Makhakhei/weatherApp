import { get } from "./components/restAPI";
import { renderWeather } from "./components/render";

document.addEventListener("DOMContentLoaded", get("Belarus", "Minsk"));

//Input validator
document.querySelector("input").addEventListener("input", function () {
  this.value = this.value.replace(/[^a-z\s\D]/gi, "");
});

//Render
const searchButton = document.getElementById("weather-search__button");
searchButton.addEventListener("click", renderWeather);
document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    renderWeather();
  }
});