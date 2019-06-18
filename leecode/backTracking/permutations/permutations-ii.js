/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const result = []
    nums = nums.sort((a, b) => a - b)
    backTrack(result, [], nums, nums)
    return result
};

function backTrack (result, currents, remains, origin) {
    if (remains.length === 0) {
        result.push(currents.slice())
        return
    }
    for (let i = 0; i < remains.length; i++) {
        if (i >= 1 && remains[i] === remains[i - 1]) {
            continue
        }
        const newCurrents = currents.concat([remains[i]])
        const newRemains = remains.slice(0, i).concat(remains.slice(i + 1))
        backTrack(result, newCurrents, newRemains, origin)
    }

}

// console.log(permuteUnique([1, 1, 2]))
console.log(permuteUnique([3, 3, 0, 3]))