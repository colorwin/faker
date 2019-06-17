/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let left = 0
    let right = 0
    let middle = 0

    let minLeft = 0
    let maxRight = 0
    const mapString = {}
    let repeatMap = {}
    for (let i = 0; i < s.length; i++) {
        let cur = s[i]
        let tempLeft = mapString[cur]
        if (repeatMap[cur] !== undefined) {
            left = repeatMap[cur] 
            right = i
            middle = (left + right) / 2
        } else  {
            if (i - tempLeft <= 2) {
                middle = (i + tempLeft) / 2
                left = mapString[cur]
                right = i
            }
            if (middle && (tempLeft + i) / 2 === middle && i > right) {
                left = mapString[cur]
                right = i
            }
        }
        if ((right - left) >  (maxRight - minLeft)) {
            maxRight = right
            minLeft = left
        }
        if (s[i - 1] === s[i]) {
            repeatMap[cur] = repeatMap[cur] !== undefined ? repeatMap[cur] : i - 1
        } else {
            repeatMap[cur] = undefined
        }
        mapString[cur] = i
    }
    // console.log(minLeft, maxRight, left, right, middle, mapString, repeatMap)
    return s.slice(minLeft, maxRight + 1)
};
console.log(longestPalindrome("abadd"))