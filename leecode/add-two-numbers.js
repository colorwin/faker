const left = [2, 4, 3]
const right = [5, 6, 4]
// 遍历数组 l1 l2
// 末尾相加, 放在一个新数组开头

var addTwoNumbers = function (l1, l2) {
    let i = l1.length - 1
    let j = l2.length - 1
    const result = []
    while (i >= 0 || j >= 0) {
        if (l1[i] !== undefined && l2[j] !== undefined) {
            result.unshift(l1[i] + l2[j])
            i--
            j--
        } else if (l1[i] !== undefined) {
            result.unshift(l1[i])
            i--
        } else {
            result.unshift(l2[j])
            j--
        }
    }
    for (let k = result.length - 1; k >= 0; k--) {
        const item = result[k]
        if (item >= 10) {
            const one = item % 10
            const two = Math.floor(item / 10)
            if (result[k - 1] !== undefined) {
                result[k - 1] = result[k - 1] + two
                result[k] = one
            } else {
                result.unshift(two)
            }
        } 
    }
    return result.reverse()
}
console.log(addTwoNumbers(left, right))