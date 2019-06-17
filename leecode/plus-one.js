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
    const length = digits.length
    digits[length - 1] = digits[length - 1] + 1
    return format(digits)
};
console.log(plusOne([9, 9]))