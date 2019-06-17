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
    for (let i = 1; i <= s.length; i++) {
        if (start + i > s.length) {
            continue
        }
        const temp = s.slice(start, start + i)
        if (!isPalindrome(temp)) {
            continue
        }
        cur.push(temp)
        search(s, start + i, result, cur)
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