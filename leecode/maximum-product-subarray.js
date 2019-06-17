/**
 * @param nums: An array of integers
 * @return: An integer
 */
const maxProduct = function (nums) {
    let result
    let cur
    for (let i = 0; i < nums.length; i++) {
        cur = nums[i]
        result = result ? Math.max(result, cur) : cur
        for (let j = i + 1; j < nums.length; j++) {
            cur = cur * nums[j]
            result = Math.max(result, cur)
        }
    }
    return result
}

const input = [-1, 2, 4, 1]
// const input = [2, 3, -2, 4]
const ouput = maxProduct(input)
console.log({ouput})