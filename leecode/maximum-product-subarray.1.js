/**
 * @param nums: An array of integers
 * @return: An integer
 */
const maxProduct = function (nums) {
    let F =[nums[0]]
    let G =[nums[0]]
    for (let i = 1; i < nums.length; i++) {
        let Ai = nums[i]
        F.push(Math.max(F[i - 1] * Ai, G[i - 1] * Ai, Ai))
        G.push(Math.min(F[i - 1] * Ai, G[i - 1] * Ai, Ai))
    }
    return Math.max.apply(null, F)
}

const input = 
// [-1, 2, 4, 1, 2]
    [-4, -3, -2]
// const input = [2, 3, -2, 4]
const ouput = maxProduct(input)
console.log({ouput})