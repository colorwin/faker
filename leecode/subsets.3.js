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
    for (let i = start; i < nums.length; i++) {
        let cur = tempList.slice()
        cur.push(nums[i])
        backTrack(result, cur, nums, i + 1)
    }
}
console.log(subsets([1, 2, 3]))