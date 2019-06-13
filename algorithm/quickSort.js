function swap (arr, l, r) {
    const temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
    return arr
}

function quickSort (arr, l, r) {
    if (r <= l) {
        return 
    }
    console.log(arr, l, r, 'before')
    let i = l
    let j = r
    const index = Math.floor((l + r) / 2)
    const main = arr[index]
    while (i <= j) {
        while (arr[i] < main) {
            i++
        }
        while (arr[j] > main) {
            j--
        }
        if (i <= j) {
            swap(arr, i, j)
            i++
            j--
        }
    }
    console.log(arr, i, 'after')
    quickSort(arr, l, j)
    quickSort(arr, j + 1, r)
}

const arr = [3,5,1,6,4,7,2]
// const arr = [1,2,3,5,4,7,6]
// const arr = [4,2,1,3,5,7,6]
const result = quickSort(arr, 0, arr.length - 1)
console.log(arr)