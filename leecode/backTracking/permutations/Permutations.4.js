/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = {}
    result[0] = [[nums[0]]]
    for (let i = 1; i < nums.length; i++) {
        let prev = result[i - 1]
        for (let prevItem of prev) {
            for (let j = 0; j <= prevItem.length; j++) {
                let cur = prevItem.slice()
                cur.splice(j, 0, nums[i])
                if (!result[i]) {
                    result[i] = []
                }
                result[i].push(cur)
            }
        }
    }
    return result[nums.length - 1]
};
const result = permute([1, 2, 3])
console.log(result)