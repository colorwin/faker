/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0;
    let j = 0;
    const arr = []
    while (i < nums1.length || j < nums2.length) {
        // console.log(i, j)
        if (nums1[i] < nums2[j] || nums2[j] === undefined) {
            arr.push(nums1[i])
            i++
        } else {
            arr.push(nums2[j])
            j++
        }
    }
    // console.log({ result: arr})
    let median
    if (arr.length % 2 === 0) {
        median = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
    } else {
        median = arr[Math.floor(arr.length / 2)]
    }
    return median
};
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
const nums2 = [0, 6]
const result = findMedianSortedArrays(nums1, nums2)
console.log({result})