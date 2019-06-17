/**
 * @param nums: An array of integers
 * @return: An integer
 */
const maxProduct = function (nums) {
    let max = nums[0]
    let min = nums[0]
    let result = nums[0]
    for (let i = 1; i < nums.length; i++) {
        let ai = nums[i]
        let premax = max
        max = Math.max(max * ai, min * ai, ai)
        min = Math.min(premax * ai, min * ai, ai)
        result = Math.max(max, result)
    }
    return result
}

const input = 
    [2, 3, -2, 4]
// [-1, 2, 4, 1, 2]
    // [-4, -3, -2]
// const input = [2, 3, -2, 4]
const ouput = maxProduct(input)
console.log({ouput})