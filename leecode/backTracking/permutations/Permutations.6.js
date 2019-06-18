function permute (arr) {
    const result = []
    backTrack(arr, result, [])
    return result
}

function backTrack (origin, result, temp) {
    if (temp.length === origin.length) {
        result.push(temp.slice())
        return
    }
    for (let i = 0; i < origin.length; i++) {
        const item = origin[i]
        if (temp.indexOf(item) >= 0) {
            continue
        }
        temp.push(item)
        backTrack(origin, result, temp)
        temp.pop()
    }
}

const arr = [1,2,3]
const result = permute(arr)
console.log(result)