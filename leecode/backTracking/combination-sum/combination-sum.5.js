/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = []
    backTrack(candidates, result, target, [], 0)
    return result
};

function backTrack (arr, result, target, temp, start) {
    if (target < 0) {
        return
    }
    if (target === 0) {
        result.push(temp.slice())
        return
    }
    for (let i = start; i < arr.length; i++) {
        const item = arr[i]
        temp.push(item)
        const newTarget = target - item
        backTrack(arr, result, newTarget, temp, i)
        temp.pop()
    }
}



console.log(combinationSum([2,3,6,7], 7))