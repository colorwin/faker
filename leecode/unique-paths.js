/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var cache = {}
var uniquePaths = function (m, n) {
    if (cache[m] && cache[m][n]) {
        return cache[m][n]
    }
    if (cache[n] && cache[n][m]) {
        return cache[n][m]
    }
    if (n === 1 || m === 1) {
        return 1
    }

    const result =  uniquePaths(m - 1, n) + uniquePaths(m, n - 1)

    if (cache[m] === undefined) {
        cache[m] = {}
    }
    cache[m][n] = result
    // console.log(cache)
    return result
};
// console.log(uniquePaths(3, 9))
console.log(uniquePaths(51, 9))