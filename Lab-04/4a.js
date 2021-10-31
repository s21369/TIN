let number = 5;

function factorialIter(num) {
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

const factorialRec = function(num) {  
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorialRec(num - 1);
    }
}

console.log(`Factorial of number ${number}:\nIterative: ${factorialIter(number)}\nRecursive: ${factorialRec(number)}`);