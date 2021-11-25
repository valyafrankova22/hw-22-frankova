
function findPalindrome(num, count) {
    count = count || 0;
    let str = num.toString();
    let revStr = str.split("").reverse().join("");
    if (str === revStr) {
        return {
            result: str,
            steps: count,
        };
    }
    return findPalindrome(num + +revStr, count + 1);
}

console.log(findPalindrome(312));
console.log(findPalindrome(213));
console.log(findPalindrome(96));