/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = []
    candidates = candidates.sort((a, b) => a - b)
    backTrack(result, [], candidates, target)
    return result
};

function countSum(arr) {
    return arr.reduce((sum, cur) => {
        return sum + cur
    }, 0)
}

function backTrack(result, currents, candidates, target, start) {
    let sum = countSum(currents)
    if (sum > target) {
        return
    }
    if (sum === target) {
        result.push(currents.slice())
    }
    for (let i = 0; i < candidates.length; i++) {
        backTrack(result, currents.concat([candidates[i]]), candidates.slice(i), target, start)
    }
}

console.log(combinationSum([2, 3, 4, 7], 7))