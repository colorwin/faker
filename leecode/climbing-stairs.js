/**
 * @param {number} n
 * @return {number}
 */
const F = []
F[1] = 1
F[2] = 2
var climbStairs = function (n) {
    if (n <= 2) {
        return F[n]
    }
    if (F[n]) {
        return F[n]
    }
    const result = climbStairs(n - 1) + climbStairs(n - 2)
    F[n] = result
    return result
};
const result = climbStairs(44)
console.log({result})