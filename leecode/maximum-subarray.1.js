/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let F = nums[0]
    let result = nums[0]
    for (let i = 1; i < nums.length; i++) {
        let Ai = nums[i]
        F = Math.max(F + Ai, Ai)
        result = Math.max(result, F)
    }
    return result
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))