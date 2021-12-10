/* global XMLHttpRequest, document */
// eslint-disable-next-line no-unused-vars
function calc() {
    const data = {
        n1: Number.parseFloat(document.getElementById("num1").value),
        n2: Number.parseFloat(document.getElementById("num2").value),
        op: document.getElementById("op").value,
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/calc", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const resp = JSON.parse(xhr.response);
            const resultH = document.createElement("h1");
            resultH.textContent = `${resp.n1} ${resp.op} ${resp.n2} = ${Number(resp.res.toFixed(4))}`;
            const resultDiv = document.getElementById("res");
            resultDiv.innerHTML = "";
            resultDiv.appendChild(resultH);
        }
    };
    xhr.send(JSON.stringify(data));
}
