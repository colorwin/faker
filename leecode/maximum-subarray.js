/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let F = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        let Ai = nums[i]
        F.push(Math.max(F[i - 1] + Ai, Ai))
    }
    return Math.max.apply(null, F)
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))