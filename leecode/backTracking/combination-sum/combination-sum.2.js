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

function backTrack (result, currents, remains, need, start = 0) {
    if (need < 0) {
        return
    }
    if (need === 0) {
        result.push(currents.slice())
    }
    for (let i = start; i < remains.length; i++) {
        currents.push(remains[i])
        backTrack(result, currents, remains, need - remains[i], i)
        currents.pop()
    }
}

console.log(combinationSum([2,3,4,7], 7))