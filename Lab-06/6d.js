const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function addTableRow(username, email, age) {
    const table = document.getElementById("table-data");
    const row = table.insertRow();
    const usernameCell = row.insertCell();
    usernameCell.textContent = username;
    const emailCell = row.insertCell();
    emailCell.textContent = email;
    const ageCell = row.insertCell();
    ageCell.textContent = age;
}

// eslint-disable-next-line no-unused-vars
function validateForm() {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const age = document.getElementById("age");

    let invalidCount = 0;
    if (username.value.length < 4 || username.value.length > 16) {
        username.setAttribute("class", "invalid");
        const errorMessageP = document.createElement("p");
        errorMessageP.textContent = `Username should be ${username.value.length < 4
            ? "at least 4 characters long"
            : "no more than 16 characters long"}!`;
        const parentNode = document.getElementById("invalid-username-message");
        parentNode.innerHTML = "";
        parentNode.appendChild(errorMessageP);
        invalidCount++;
    } else {
        username.setAttribute("class", "valid");
        document.getElementById("invalid-username-message").innerHTML = "";
    }
    if (!emailRegex.test(email.value)) {
        email.setAttribute("class", "invalid");
        const errorMessageP = document.createElement("p");
        errorMessageP.textContent = "Email is not valid!";
        const parentNode = document.getElementById("invalid-email-message");
        parentNode.innerHTML = "";
        parentNode.appendChild(errorMessageP);
        invalidCount++;
    } else {
        email.setAttribute("class", "valid");
        document.getElementById("invalid-email-message").innerHTML = "";
    }
    if (age.value < 18) {
        age.setAttribute("class", "invalid");
        const errorMessageP = document.createElement("p");
        errorMessageP.textContent = "You should be at least 18 years old!";
        const parentNode = document.getElementById("invalid-age-message");
        parentNode.innerHTML = "";
        parentNode.appendChild(errorMessageP);
        invalidCount++;
    } else {
        age.setAttribute("class", "valid");
        document.getElementById("invalid-age-message").innerHTML = "";
    }
    if (invalidCount === 0) {
        addTableRow(username.value, email.value, age.value);
        document.getElementById("form-data").reset();
        document.querySelector("#form-data").querySelectorAll("input").forEach((e) => {
            e.removeAttribute("class", "valid");
        });
    }
}
