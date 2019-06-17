/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    var result = []
    var _permute = function (remains, currents) {
        if (currents.length === nums.length) {
            result.push(currents)
            return
        }
        for (let i = 0; i < remains.length; i++) {
            let newRemain = remains.slice(0, i).concat(remains.slice(i + 1))
            let newCurrent = currents.slice()
            newCurrent.push(remains[i])
            _permute(newRemain, newCurrent)
        }
    }
    _permute(nums, [])
    return result
};

const result = permute([1, 2, 3])
console.log(result)