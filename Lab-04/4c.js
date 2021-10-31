const regex = /[^a-z0-9]/g;
let string = "Was it a car or a cat I saw";


function palindrome(str) {
    let s = str.toLowerCase().replaceAll(regex, "");
    if (s === s.split("").reverse().join("")) {
        return true;
    }
    return false;
}

console.log(`String "${string}" is ${palindrome(string) ? "" : "NOT "}palindrome`);