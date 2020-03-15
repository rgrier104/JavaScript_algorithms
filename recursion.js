
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

// returns reverse of string ("hello" would return "olleh")
function reverse(string) {
    if (string.length === 1) return string[0];
    return string[string.length - 1] + reverse(string.slice(0, -1))
}

// checks if palindrome
function isPalindrome(string) {
    if (string.length <= 1) return true;
    if (string[0] !== string[string.length - 1]) {
        return false;
    }
    if (string[0] === string[string.length - 1]) {
        return isPalindrome(string.slice(1, string.length - 1))
    }
    return true;
}