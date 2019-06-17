/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = []
    backTrack(result, [], nums, 0)
    return result
};
function backTrack (result, currents, remains) {
    result.push(currents.slice())
    for (let i = 0; i < remains.length; i++) {
        currents.push(remains[i])
        backTrack(result, currents, remains.slice(i + 1))
        currents.pop()
    }
}
console.log(subsets([1, 2, 3]))