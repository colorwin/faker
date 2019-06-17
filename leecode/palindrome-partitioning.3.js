/**
 * @param {string} s
 * @return {string[][]}
 */

var partition = function (s) {
    const result = []
    search(s, 0, result, [])
    return result
};
var search = function (s, start, result, cur) {
    if (start >= s.length) {
        result.push(cur.slice())
        return
    }
    for (let i = start; i < s.length; i++) {
        const temp = s.slice(start, i + 1)
        if (!isPalindrome(temp)) {
            continue
        }
        cur.push(temp)
        search(s, i + 1, result, cur)
        cur.pop()
    }
}

function isPalindrome (s) {
    const medium = Math.floor(s.length / 2)
    let i
    let j
    if (s.length % 2 === 0) {
        i = medium - 1
        j = medium
    } else {
        i = medium - 1
        j = medium + 1
    }
    while (i >= 0) {
        if (s[i] !== s[j]) {
            return false
        }
        i -= 1
        j += 1
    }
    return true
}

console.log(partition('aab'))
// console.log(partition('cdd'))