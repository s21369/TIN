function CtoF(temp) {
    return (temp * (9 / 5)) + 32;
}

function FtoC(temp) {
    return (temp - 32) * (5 / 9);
}

// eslint-disable-next-line no-unused-vars
function convert() {
    const temp = parseFloat(document.getElementById("temp").value);
    if (Number.isNaN(temp)) {
        alert("Input should be a number!");
        return;
    }
    const scale = document.querySelector("input[name='temp-scale']:checked").value;
    const resultH = document.createElement("h1");
    if (scale === "c") {
        resultH.textContent = `${temp} C = ${CtoF(temp).toFixed(2)} F`;
    } else {
        resultH.textContent = `${temp} F = ${FtoC(temp).toFixed(2)} C`;
    }
    const resultDiv = document.getElementById("temp-converted");
    resultDiv.innerHTML = "";
    resultDiv.appendChild(resultH);
}
