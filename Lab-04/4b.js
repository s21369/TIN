let num = 7;

// assuming this sequence starts with 1
function fibonacci(num) {
    if (num <= 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(`Fibonacci number at position ${num} is ${fibonacci(num)}`);