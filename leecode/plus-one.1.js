/**
 * @param {number[]} digits
 * @return {number[]}
 */
function format(digits) {
    digits = digits.reverse()
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] >= 10) {
            digits[i] = digits[i] % 10
            digits[i + 1] = (digits[i + 1] || 0) + 1
        }
    }
    return digits.reverse()
}
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] = (digits[i] + 1) % 10;
        if (digits[i]) return digits;
    }
    digits.unshift(1);
    return digits;
};
console.log(plusOne([9, 9]))