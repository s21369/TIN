function fromCelsius() {
    const temp = Number.parseFloat(document.getElementById("celsius").value);
    if (!Number.isNaN(temp)) {
        document.getElementById("fahrenheit").value = ((temp * (9 / 5)) + 32).toFixed(2);
        document.getElementById("kelvin").value = (temp + 273.15).toFixed(2);
    }
}

function fromFahrenheit() {
    const temp = Number.parseFloat(document.getElementById("fahrenheit").value);
    if (!Number.isNaN(temp)) {
        document.getElementById("celsius").value = ((temp - 32) * (5 / 9)).toFixed(2);
        document.getElementById("kelvin").value = (((temp - 32) * (5 / 9)) + 273.15).toFixed(2);
    }
}

function fromKelvin() {
    const temp = Number.parseFloat(document.getElementById("kelvin").value);
    if (!Number.isNaN(temp)) {
        document.getElementById("fahrenheit").value = ((temp - 273.15) * (5 / 9) + 32).toFixed(2);
        document.getElementById("celsius").value = (temp - 273.15).toFixed(2);
    }
}

module.exports = {
    fromCelsius,
    fromFahrenheit,
    fromKelvin,
};
