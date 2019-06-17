/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    var results = [];
    backTrack(results, [], nums);
    return results;
};

function backTrack (result, currents, remains) {
    if (remains.length === 0) {
        result.push(currents.slice())
        return
    }
    for (let i = 0; i < remains.length; i++) {
        currents.push(remains[i])
        backTrack(result, currents, remains.slice(0, i).concat(remains.slice(i + 1)))
        currents.pop()
    }
}


const result = permute([1, 2, 3])
console.log(result)