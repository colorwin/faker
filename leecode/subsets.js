/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = []
    backTrack(result, [], nums, 0)
    return result
};
function backTrack (result, tempList, nums, start) {
    result.push(tempList.slice())
    for (let i = 0; i < nums.length; i++) {
        tempList.push(nums[i])
        backTrack(result, tempList, nums, start + 1)
        tempList.pop()
    }
}
console.log(subsets([1, 2, 3]))