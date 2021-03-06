// checks to see if str1 and str2 contain the same letters (i.e.'pan' and 'nap')
// Uses a frequency counter rather than nested for loops to improve time complexity
// O(2n) vs O(n^2)

function validAnagram(str1, str2) {
    let freq1 = {};
    if (str1.length !== str2.length) { return false };
    for (let char of str1) {
        freq1[char] > 0 ? freq1[char]++ : freq1[char] = 1;
    }
    for (let char of str2) {
        if (!freq1[char]) {
            return false;
        } else {
            freq1[char] -= 1;
        }
    }
    return true;
}