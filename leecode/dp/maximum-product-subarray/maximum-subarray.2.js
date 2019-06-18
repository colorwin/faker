function maxSum (arr) {
    let max = arr[0]
    let result = arr[0]
    for (let i = 0; i < arr.length; i++) {
        item = arr[i]
        max = Math.max(max + item, item)
        result = Math.max(result, max)
    }
    return result
}

console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))