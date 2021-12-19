const temp = require("./temp");
const units = require("./units");

window.onload = () => {
    document.getElementById("celsius").addEventListener("input", temp.fromCelsius);
    document.getElementById("celsius").addEventListener("change", temp.fromCelsius);
    document.getElementById("kelvin").addEventListener("input", temp.fromKelvin);
    document.getElementById("kelvin").addEventListener("change", temp.fromKelvin);
    document.getElementById("fahrenheit").addEventListener("input", temp.fromFahrenheit);
    document.getElementById("fahrenheit").addEventListener("change", temp.fromFahrenheit);
    document.getElementById("kilometers").addEventListener("input", units.fromKilometers);
    document.getElementById("kilometers").addEventListener("change", units.fromKilometers);
    document.getElementById("miles").addEventListener("input", units.fromMiles);
    document.getElementById("miles").addEventListener("change", units.fromMiles);
};
