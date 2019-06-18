function maxProduct (arr) {
    let max = arr[0]
    let min = arr[0]
    let result = arr[0]
    for (let i = 1; i < arr.length; i++) {
        const item = arr[i]
        max = Math.max(item * max, item * min, item)
        min = Math.min(item * max, item * min, item)
        result = Math.max(result, max)
    }
    return result
}
console.log(maxProduct([2, 3, -2, 4]))