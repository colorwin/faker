/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    var results = [];
    backTrack(results, [], nums);
    return results;
};

function backTrack (result, tempList, nums) {
    if (tempList.length === nums.length) {
        result.push(tempList.slice())
        return
    }
    for (let i = 0; i < nums.length; i++) {
        if (tempList.indexOf(nums[i]) >= 0) {
            continue
        }
        tempList.push(nums[i])
        backTrack(result, tempList, nums)
        tempList.pop()
                        console.log({
                            i,
                            tempList,
                            result
                        })
    }
}


const result = permute([1, 2, 3])
console.log(result)