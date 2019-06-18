function permutation (arr) {
    const result = []
    const visited = new Array(arr.length)
    visited.fill(false)
    backTrack(arr, result, [], visited)
    return result
}

function backTrack (origin, result, temp, visited) {
    if (temp.length === origin.length) {
        result.push(temp.slice())
        return
    }
    for (let i = 0; i < origin.length; i++) {
        // skip
        if (visited[i]) {
            continue
        }
        if (i >= 1 && !visited[i - 1] && origin[i] === origin[i - 1]) {
            continue
        }
        temp.push(origin[i])
        visited[i] = true
        backTrack(origin, result, temp, visited)
        visited[i] = false
        temp.pop()
    }
}

const arr = [1, 1, 2]
const result = permutation(arr)
console.log(result)