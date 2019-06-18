function combinationSum2 (arr, target) {
    arr = arr.sort((a, b) => a - b)
    const result = []
    const visited = new Array(arr.length)
    visited.fill(false)
    backTrack(arr, result, [], target, 0, visited)
    return result
}

function backTrack (arr, result, temp, target, start, visited) {
    if (target < 0) {
        return
    }
    if (target === 0) {
        result.push(temp.slice())
        return 
    }
    for (let i = start; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1] && !visited[i - 1]) {
            continue
        }
        const item = arr[i]
        temp.push(item)
        visited[i] = true
        backTrack(arr, result, temp, target - item, i + 1, visited)
        visited[i] = false
        temp.pop(item)
    }
}

console.log(combinationSum2([2, 5, 2, 1, 2], 5))