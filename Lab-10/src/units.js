function fromKilometers() {
    const units = Number.parseFloat(document.getElementById("kilometers").value);
    if (!Number.isNaN(units)) {
        document.getElementById("miles").value = (units * 0.62137119).toFixed(4);
    }
}

function fromMiles() {
    const units = Number.parseFloat(document.getElementById("miles").value);
    if (!Number.isNaN(units)) {
        document.getElementById("kilometers").value = (units / 0.62137119).toFixed(4);
    }
}

module.exports = {
    fromKilometers,
    fromMiles,
};
