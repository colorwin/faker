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

function countSum (arr) {
    return arr.reduce((sum, cur) => {
        return sum + cur
    }, 0)
}

function backTrack (result, currents, remains, target) {
    let sum = countSum(currents)
    if (sum > target) {
        return
    }
    if (sum === target) {
        result.push(currents.slice())
    }
    for (let i = 0; i < remains.length; i++) {
        let temp = currents.slice()
        temp.push(remains[i])
        backTrack(result, temp, remains.slice(i), target)
    }
}

console.log(combinationSum([2,3,4,7], 7))