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
function backTrack (result, currents, remains) {
    result.push(currents.slice())
    for (let i = 0; i < remains.length; i++) {
        if (i >= 1 && remains[i] === remains[i - 1]) {
            continue
        }
        const temp = currents.slice()
        temp.push(remains[i])
        backTrack(result, temp, remains.slice(i + 1))
    }
}
console.log(subsetsWithDup([2, 2, 2]))
console.log(subsetsWithDup([4, 4, 4, 1, 4]))