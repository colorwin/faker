/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const result = []
    nums = nums.sort((a, b) => a - b)
    backTrack(result, [], nums, 0)
    return result
};
function backTrack (result, currents, nums, start) {
    result.push(currents.slice())
    for (let i = start; i < nums.length; i++) {
        // console.log(remains[i], remains[i - 1])
        if (i - start >= 1 && nums[i] === nums[i - 1]) {
            continue
        }
        currents.push(nums[i])
        backTrack(result, currents, nums, i + 1)
        currents.pop()
    }
}
console.log(subsetsWithDup([2, 2, 2]))
// console.log(subsetsWithDup([4, 4, 4, 1, 4]))
// [4, 4, 4, 1, 4]
