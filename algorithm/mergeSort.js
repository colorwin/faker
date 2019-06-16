function merge (left, right) {
    let i = 0
    let j = 0
    const result = []
    while (i < left.length || j < right.length) {
        if (left[i] === undefined) {
            result.push(right[j])
            j++
        } else if (right[j] === undefined) {
            result.push(left[i])
            i++
        } else if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }

    }
    // console.log(result, 'merge')
    return result
}

function mergeSort (arr) {
    if (arr.length < 2) {
        return arr
    }
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)
    // console.log(left, right, 'divide')
    return merge(mergeSort(left), mergeSort(right))
}

const arr = [3, 6, 2, 1, 4, 5]
const result = mergeSort(arr)
console.log(result)