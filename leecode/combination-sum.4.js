/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const sortedNums = candidates.sort((a, b) => a - b);
    let opt = {};
    opt[0] = []

    for (let sum = 1; sum <= target; sum++) {
        opt[sum] = [];
        let combineList = [];

        for (let i = 0; i < sortedNums.length && sortedNums[i] <= sum; i++) {
            if (sum - sortedNums[i] === 0) {
                combineList.push([sortedNums[i]])
            }
            let prev = opt[sum - sortedNums[i]]
            for (let prevList of prev) {
                if (sortedNums[i] >= prevList[prevList.length - 1]) {
                    combineList.push([...prevList, sortedNums[i]]);
                }
            }
        }
        opt[sum] = combineList;
    }
    console.log(opt)

    return opt[target];
};

console.log(combinationSum([2,3,4,7], 7))