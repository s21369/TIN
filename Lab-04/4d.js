const regex = /[^a-zA-Z]/g;
let string = "Was it a car or a cat I saw";

function orderString(str) {
    return str.replaceAll(regex, "").split("").sort().join("");
}

console.log(`Normal: ${string}\nOrdered: ${orderString(string)}`);