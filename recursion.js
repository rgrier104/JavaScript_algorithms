
//Math.pow()
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

//factorial
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

//product of array [1,4,3] returns 12
function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1))
}

// adds up all the numbers from 0 to the number passed
// 6 would return 21
function recursiveRange(num) {
    if (num === 1) return 1;
    return num + recursiveRange(num - 1);
}

// returns the nth number of the Fibonacci sequence (num is equal sum of 2 nums before)
// 1 1 2 3 5 8 13
function fib(num) {
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2)
}