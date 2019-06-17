const left = [2, 4, 9]
const right = [5, 6, 4]
// 1. 遍历数组 l1 l2
// 2. 两个数和进位相加, 缓存进位

var addTwoNumbers = function (l1, l2) {
    let i = 0
    let j = 0
    const result = []
    let added = 0
    while (i < l1.length || j < l2.length) {
        let left = l1[i] || 0
        let right = l2[j] || 0
        let sum = left + right + added
        added = Math.floor(sum / 10)
        result.push(sum % 10)
        i++
        j++
    }
    if (added !== 0) {
        result.push(added)
    }
    return result
}
console.log(addTwoNumbers(left, right))