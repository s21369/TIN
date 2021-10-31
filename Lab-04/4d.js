const regex = /[^a-zA-Z]/g;
let str = "Was it a car or a cat I saw";

function orderString(str){
    return str.replaceAll(regex, "").split("").sort().join("");
}

console.log(`Normal: ${str}\nOrdered: ${orderString(str)}`);