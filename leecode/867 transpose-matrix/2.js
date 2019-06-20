function transpose (matrix) {
    const result = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (result[j] === undefined) {
                result[j] = []
            }
            result[j][i] = matrix[i][j]
        }
    }
    return result
}

const result = transpose([[1, 2, 3], [4, 5, 6]])
console.log(result)