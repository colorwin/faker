/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function (nums) {
    const output = new Set();
    backtrack(nums, nums.length, output, 0);
    return [...output].map(o => o.split(","));
};

function backtrack(nums, n, output, idx) {
    if (n === idx) {
        output.add(nums.join(","));
    }
    for (let i = idx; i < n; i++) {
        [nums[i], nums[idx]] = [nums[idx], nums[i]]
        backtrack(nums, n, output, idx + 1);
        [nums[i], nums[idx]] = [nums[idx], nums[i]]
    }
}
// console.log(permuteUnique([1, 1, 2]))
console.log(permuteUnique([3, 3, 0, 3]))