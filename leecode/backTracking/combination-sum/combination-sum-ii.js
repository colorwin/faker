/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const result = []
    candidates = candidates.sort((a, b) => a - b)
    backTrack(result, [], candidates, target, 0)
    return result
};

function backTrack (result, currents, nums, need, start) {
    if (need < 0) {
        return
    }
    if (need === 0) {
        result.push(currents.slice())
    }
    for (let i = start; i < nums.length; i++) {
        if (i > start && nums[i] === nums[i - 1]) {
            continue
        }
        currents.push(nums[i])
        backTrack(result, currents, nums, need - nums[i], i + 1)
        currents.pop()
    }
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))